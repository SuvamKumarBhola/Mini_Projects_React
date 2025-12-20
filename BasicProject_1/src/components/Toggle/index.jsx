import { useState } from "react";

export default function ToggleButton() {
    const [enabled, setEnabled] = useState(false);

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300
        ${enabled ? "bg-green-500" : "bg-gray-400"}`}
        >
            <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-7" : "translate-x-0"}`}
            />
        </button>
    );
}
