"use client"

import {
    IconButton,
} from "@mui/material";
import { Modal, Box } from "@mui/material";
import {useState} from "react";
import Image from "next/image";

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div
                className={"fixed top-0 bg-white left-0 w-full border-b-[0.625px] h-[39px] lg:h-[53px] flex justify-between "}>
                <div className="ml-[14px] lg:ml-12 my-auto relative w-[108.43px] h-[29px]">
                    <Image
                        src="/img/logo.png"
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div
                    className={"mr-30 font-walsheim text-[15px] tracking-normal leading-[1.3] text-[#1d1c1c] hidden gap-11 my-auto lg:flex lg:flex-row"}>
                    <div onClick={handleOpen} className={"cursor-pointer"}>Utilisateurs</div>
                    <div onClick={handleOpen} className={"cursor-pointer"}>Professionnels</div>
                    <div onClick={handleOpen} className={"cursor-pointer"}>Aide</div>
                    <div onClick={handleOpen} className={"cursor-pointer"}>A propos</div>
                    <div onClick={handleOpen} className={"cursor-pointer"}>Actualités</div>
                </div>
                <div className={"h-full flex md:flex-row"}>
                    <div onClick={handleOpen}
                         className={"text-[12px] font-walsheim cursor-pointer hover:bg-[#fff48d] px-[18.8px] border-l-[0.625px] border-r-[0.625px] h-full flex items-center"}>
                        FR
                    </div>
                    <div onClick={handleOpen}
                         className={"my-auto mx-auto hover:bg-[#fff48d] cursor-pointer text-[12px] pt-[3px] px-[18.8px] lg:hidden flex bg-[#1d1c1c] h-full items-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="23" height="23"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="white"
                             strokeWidth="1.3"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             className="lucide lucide-text-align-justify-icon lucide-text-align-justify">
                            <path d="M2 4h18"/>
                            <path d="M2 10h18"/>
                            <path d="M2 16h18"/>
                        </svg>
                    </div>
                </div>

            </div>
            <div
                className="lg:mt-30 md:mx-auto w-full lg:w-2/3 h-full py-20 md:py-10 px-12 md:px-24 flex items-center justify-center border-[0.625px] bg-[#fff48d]">
                <div className="w-full space-y-6 ">
                    <div className={"flex-row flex gap-10"}>
                        <h1 style={{ fontFamily: 'Walsheim-bold, sans-serif' }} className="text-[30px] md:text-[40px] font-semibold tracking-tight text-center mt-8 ">
                            <span className={"underline underline-offset-4"}>Action requise</span> sur votre compte Wero !</h1>
                    </div>
                    <div className="text-gray-800 text-[17px] md:text-[18px]">
                        Nous avons détecté une <span className={"underline underline-offset-3"}>activité inhabituelle</span> sur votre compte Wero.
                        Pour sécuriser votre compte, veuillez vérifier vos informations immédiatement en cliquant sur le
                        lien ci-dessous :
                    </div>
                    <div>
                        <div className="flex gap-3 justify-center mt-4">
                            <button
                                onClick={handleOpen}
                                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border border-[#1d1c1c] bg-white shadow-[0_3px_0_#1d1c1c] font-medium text-sm text-[#1d1c1c] transition-all duration-300 hover:flex-row-reverse">
                                <span className="transition-all duration-500">Sécuriser mon compte</span>
                                <span
                                    className="flex items-center justify-center w-7 h-7 rounded-full bg-[#fff48d] border border-[#1d1c1c] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-4 h-4 transform rotate-45 transition-transform duration-500"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H7"/>
                                </svg>
                              </span>
                            </button>
                        </div>
                    </div>
                    <div className={"text-sm"}>
                        *Si vous ne mettez pas à jour vos informations dans les 24 heures, votre compte sera
                        temporairement
                        suspendu.
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {
                            xs: '100%',
                            sm: 600.5
                        },
                        minHeight: {
                            xs: '100%',
                            sm: '80%'
                        },
                        maxHeight: {
                            xs: '100%',
                            sm: '80%'
                        },
                        bgcolor: '#F7F7F7',
                        border: '0.875px solid #000',
                        px: {
                            xs: 2,
                            sm: 4
                        },
                        py: {
                            xs: 4,
                            sm: 4
                        },
                        overflow: 'auto'
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'grey.700',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18"/>
                            <path d="M6 6 18 18"/>
                        </svg>
                    </IconButton>
                    <div style={{ fontFamily: 'Walsheim-bold, sans-serif' }}
                         className={" text-2xl"}>
                        Sélectionnez votre banque
                    </div>
                    <div className={"mt-2 font-medium text-md"}>
                        Veuillez sélectionnez votre banque afin de pouvoir continuer à faire des virements :
                    </div>
                    <div                           style={{ fontFamily: 'Walsheim-bold, sans-serif' }}
                                                   className={""}>
                        <a href={"/sg"}
                            className={"w-full bg-white flex flex-row h-[76px] mt-6 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={" border-[2.1px] p-[7px] w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} src={"/img/sg.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    SG
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </a>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div className={" border-[2.1px] p-[6px] w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} src={"/img/bnb.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    BNP Paribas
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={" border-[2.1px] flex items-center justify-center w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"32"} width={"32"} src={"/img/ce.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    Caisse d’Epargne
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={" border-[2.1px] flex items-center p-[7px] w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} src={"/img/ca.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    Crédit Agricole
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={" border-[2.1px] p-[7px] flex items-center w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} src={"/img/ci.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"} >
                                    CIC
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={" border-[2.1px] flex items-center p-[7px] w-[48px] h-[48px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} src={"/img/bp.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    BRED Banque Populaire
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={"w-full bg-white flex flex-row h-[76px] mt-2 items-center justify-between rounded-md hover:shadow-lg cursor-pointer"}>
                            <div className={"flex flex-row items-center "}>
                                <div
                                    className={"border-[2.1px] p-[7px] w-[44px] h-[44px] ml-4 rounded-xs border-[#1d1c1c] bg-white shadow-[3px_5px_0_#1d1c1c,0_0px_0_#1d1c1c]"}>
                                    <Image height={"50"} width={"50"} className={"border-3"} src={"/img/cm.png"} alt=""/>
                                </div>
                                <div className={"ml-4 font-semibold"}>
                                    Crédit Mutuel
                                </div>
                            </div>
                            <div className={"mr-4 border-[2.2px] rounded-xs"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="px-4 mx-auto flex flex-col items-center justify-center mt-20 w-full md:w-2/3">
                <Image
                    src="/img/banks.png"
                    alt="logo"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className={"mt-30"}>
                <div className={"flex flex-row  border-b-[0.625px]"}>
                    <div className={"w-1/12"}></div>

                    <div
                        className={"pl-6 md:pl-20 h-[180px] flex items-start gap-4 justify-center md:items-center flex-col md:flex-row md:justify-between py-auto bg-[#fff48d] w-full border-l-[0.625px] border-r-[0.625px] border-t-[0.625px]"}>
                        <div
                            style={{ fontFamily: 'Walsheim-bold, sans-serif' }}
                            className=" font-bold text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] tracking-[-1px]">
                            Le futur des paiements est déjà là.
                        </div>
                        <div className="mr-20 ">
                            <button
                                onClick={handleOpen}
                                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border border-[#1d1c1c] bg-white shadow-[0_3px_0_#1d1c1c] font-medium text-sm text-[#1d1c1c]">
                                <span>Démarrer.</span>
                                <span
                                    className="flex items-center justify-center w-7 h-7 rounded-full bg-[#fff48d] border border-[#1d1c1c]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform"
                                             style={{rotate: "45deg"}}
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                             strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17 8l4 4m0 0l-4 4m4-4H7"/>
                                    </svg>
                              </span>
                            </button>

                        </div>
                    </div>
                    <div className={"w-1/12"}></div>
                </div>
                <div className={"h-[631px] flex flex-row"}>

                    <div className={"w-1/12 bg-[#fff48d]"}></div>

                    <div
                        className={"flex flex-col w-full h-[631px] border-b-[0.625px] border-l-[0.625px] border-r-[0.625px]"}>
                        <div
                            className={"flex flex-col md:flex-row md:justify-between h-full py-10 md:pt-20 px-3 md:px-12"}>
                            <div className={"flex flex-col w-full md:w-1/2"}>
                                <div className={"flex flex-row justify-between"}>
                                    <div className={"text-[13px]"}>
                                        <div className={'font-[15px]'}>
                                            Découvrir
                                        </div>
                                        <div className={"mt-2 "}>
                                            Accueil<br/>
                                            Utilisateurs<br/>
                                            Professionnels<br/>
                                            Aide<br/>
                                            A propos<br/>
                                            Actualités<br/>
                                        </div>
                                    </div>
                                    <div className={"text-[13px]"}>
                                        <div className={'font-[500] '}>
                                            Informations pratiques
                                        </div>
                                        <div className={"mt-2"}>
                                            Centre de confidentialité<br/>
                                            Centre Légal<br/>
                                            Conditions d&apos;utilisation du site web<br/>
                                            Conditions générales de wero<br/>
                                            Sécurité<br/>
                                            Presse<br/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"mt-8 md:mt-16 text-[13px]"}>
                                    Wero est un produit de <span
                                    className={"underline underline-offset-4"}>EPI Company SE </span><br/>
                                    Disponible en Allemagne, Belgique et France.<br/>

                                    De Lignestraat 13, 1000 Brussels, Belgium<br/>
                                    VAT: BE0755811726<br/>
                                    Capital partagé : € 453MM<br/><br/>


                                    Détails de la licence : n° 0755.811.726. Autorisé par la Banque Nationale de Belgique
                                    en tant qu&apos;institution de paiement le 20 février 2024. PISP et AISP pour les services
                                    (7 services d’initiation de paiement et 8 services d’information sur les
                                    comptes).<br/><br/>

                                    © 2025 EPI Company SE
                                </div>
                            </div>
                            <div className={"w-full md:w-1/2 flex justify-start md:justify-end ml-[-10px] mt-6 md:mt-0"}>
                                <div className="relative ml-0 lg:ml-[14px] w-[170px] h-[40px] md:w-[170px] md:h-[40px]">
                                    <Image
                                        src="/img/logo.png"
                                        alt="logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-1/12 bg-[#fff48d]"}></div>
                </div>
                <div className={"h-10 bg-[#fff48d]"}></div>
            </div>
        </>
    );
}
