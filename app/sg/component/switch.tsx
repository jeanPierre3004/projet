import { useState } from "react";

export default function SwitchWithTextInside() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setIsOn(!isOn)}
            className={`text-sm text-white relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300
        ${isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}`}
        >
            {isOn ? "oui" : ""}
            <div className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-semibold text-green-500 transition-all duration-300">

            </div>
        </button>
    );
}
