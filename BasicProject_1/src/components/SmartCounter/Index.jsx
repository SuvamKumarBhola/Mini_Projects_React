import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, Trophy, Target } from 'lucide-react';

function SmartCounter() {
    const [count, setCount] = useState(0);
    const maxValue = 10;
    const minValue = 0;

    const increment = () => {
        if (count < maxValue) {
            setCount(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (count > minValue) {
            setCount(prev => prev - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    const progress = (count / maxValue) * 100;

    let statusMessage = "";
    let statusColor = "text-slate-600";
    let statusIcon = null;

    if (count === maxValue) {
        statusMessage = "Goal Reached! 🎉";
        statusColor = "text-green-600";
        statusIcon = <Trophy className="inline-block mr-1" size={18} />;
    } else if (count === 5) {
        statusMessage = "Halfway There!";
        statusColor = "text-blue-600";
        statusIcon = <Target className="inline-block mr-1" size={18} />;
    } else if (count >= 7) {
        statusMessage = "Almost there!";
        statusColor = "text-orange-600";
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 mb-1">Smart Counter</h1>
                    <p className="text-sm text-slate-500">Track your progress to {maxValue}</p>
                </div>

                {/* Counter Display */}
                <div className="relative mb-6">
                    <div className="text-center py-8 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100">
                        <div className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                            {count}
                        </div>
                        <div className="text-sm text-slate-500 mt-2">
                            of {maxValue}
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-slate-600 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Status Message */}
                <div className="h-8 mb-6 flex items-center justify-center">
                    {statusMessage && (
                        <div className={`font-semibold ${statusColor} flex items-center animate-fade-in`}>
                            {statusIcon}
                            {statusMessage}
                        </div>
                    )}
                </div>

                {/* Control Buttons */}
                <div className="flex gap-3 mb-4">
                    <button
                        onClick={decrement}
                        disabled={count === minValue}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${count === minValue
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : 'bg-linear-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl active:scale-95'
                            }`}
                    >
                        <Minus size={20} />
                        Decrease
                    </button>
                    <button
                        onClick={increment}
                        disabled={count === maxValue}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${count === maxValue
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : 'bg-linear-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl active:scale-95'
                            }`}
                    >
                        <Plus size={20} />
                        Increase
                    </button>
                </div>

                {/* Reset Button */}
                <button
                    onClick={reset}
                    disabled={count === 0}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${count === 0
                            ? 'text-slate-400 cursor-not-allowed'
                            : 'text-slate-700 hover:bg-slate-100 active:scale-95'
                        }`}
                >
                    <RotateCcw size={18} />
                    Reset Counter
                </button>

                {/* Statistics */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-indigo-600">{minValue}</div>
                            <div className="text-xs text-slate-500">Min</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-600">{count}</div>
                            <div className="text-xs text-slate-500">Current</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-pink-600">{maxValue}</div>
                            <div className="text-xs text-slate-500">Max</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}

export default SmartCounter;