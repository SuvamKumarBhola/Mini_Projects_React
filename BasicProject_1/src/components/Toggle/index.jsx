import { useState } from "react";

export default function ToggleButton() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
            <div className="text-center space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Toggle Switch</h2>
                    <p className="text-slate-600">Click to toggle between states</p>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => setEnabled(!enabled)}
                        className={`relative w-16 h-9 flex items-center rounded-full p-1 transition-all duration-300 ease-in-out
              ${enabled ? "bg-linear-to-r from-emerald-500 to-green-500" : "bg-linear-to-r from-slate-300 to-slate-400"}
              hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2
              ${enabled ? "focus:ring-green-300" : "focus:ring-slate-300"}`}
                        aria-checked={enabled}
                        role="switch"
                    >
                        <div
                            className={`bg-white w-7 h-7 rounded-full shadow-lg transform transition-all duration-300 ease-in-out
              flex items-center justify-center
              ${enabled ? "translate-x-7" : "translate-x-0"}`}
                        >
                            {enabled ? (
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                    </button>
                </div>

                <div className={`text-lg font-semibold transition-colors duration-300 ${enabled ? "text-green-600" : "text-slate-500"}`}>
                    {enabled ? "Enabled" : "Disabled"}
                </div>
            </div>
        </div>
    );
}