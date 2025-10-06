
type NumericKeypadGridProps = {
    value: string;
    handleClick: (param: string) => void;
    reset: () => void;
};

export default function NumericKeypadGrid({ value, handleClick, reset }: NumericKeypadGridProps) {


    const boxes = Array.from({ length: 6 }).map((_, i) => (
        <div
            key={i}
            className="w-6 h-10 flex items-center justify-center text-md font-semibold text-gray-700 blur-[0.5px] "
        >
            {value[i] ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="oklch(55.6% 0 0)"
                             stroke="none"
                             className="lucide lucide-dot-icon lucide-dot">
                    <circle cx="12" cy="12" r="4"/>
                </svg>

                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="oklch(87.2% 0.01 258.338)" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round"
                       className="lucide lucide-minus-icon lucide-minus">
                    <path d="M5 12h14"/>
                </svg>}
        </div>
    ));

    return (
        <>
            <div className="flex flex-col items-center space-y-4 mb-6">
                <div className="flex gap-2  mb-[5.7px]">
                    {boxes}
                    <div className={"mt-2 ml-[3px] cursor-pointer "} onClick={() => {reset()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="oklch(55.1% 0.027 264.364)"
                             stroke-width="3.5"
                             stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-x-icon lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[7px]">
                {["", "2", "", "4"
                    , "5", "6", "", "8"
                    , "9", "", "", "0"
                    , "3", "", "7", "1"].map((num, index) => (
                    <button
                        type={"button"}
                        key={num + index}
                        onClick={() => handleClick(num.toString())}
                        className="hover:bg-gray-300 cursor-pointer bg-[#f7f7f7] blur-[0.5px] backdrop-blur-xl text-black font-semibold text-lg rounded w-13 h-13 border-1 border-gray-300"
                    >
                        {
                            num
                        }
                    </button>
                ))}

            </div>
        </div>
        </>
    );
}
