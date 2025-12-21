import React, { useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

function PasswordStrength() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    const strengthScore = [
        hasMinLength,
        hasLowercase,
        hasUppercase,
        hasNumber,
        hasSpecialChar
    ].filter(Boolean).length;

    let strengthLabel = "Weak";
    let strengthColor = "bg-red-500";
    let textColor = "text-red-500";

    if (strengthScore === 5) {
        strengthLabel = "Very Strong";
        strengthColor = "bg-green-500";
        textColor = "text-green-500";
    } else if (strengthScore === 4) {
        strengthLabel = "Strong";
        strengthColor = "bg-green-400";
        textColor = "text-green-400";
    } else if (strengthScore === 3) {
        strengthLabel = "Medium";
        strengthColor = "bg-yellow-500";
        textColor = "text-yellow-500";
    } else if (strengthScore === 2) {
        strengthLabel = "Fair";
        strengthColor = "bg-orange-500";
        textColor = "text-orange-500";
    }

    const requirements = [
        { met: hasMinLength, text: "At least 8 characters" },
        { met: hasUppercase, text: "One uppercase letter" },
        { met: hasLowercase, text: "One lowercase letter" },
        { met: hasNumber, text: "One number" },
        { met: hasSpecialChar, text: "One special character" }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">Sign Up</h1>
                        <p className="text-slate-500">Create a secure password</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 pr-12 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {password && (
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-700">
                                            Password Strength
                                        </span>
                                        <span className={`text-sm font-semibold ${textColor}`}>
                                            {strengthLabel.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex gap-1 h-2">
                                        {[1, 2, 3, 4, 5].map((bar) => (
                                            <div
                                                key={bar}
                                                className={`flex-1 rounded-full transition-all duration-300 ${bar <= strengthScore
                                                    ? strengthColor
                                                    : 'bg-slate-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-4">
                                    <p className="text-sm font-medium text-slate-700 mb-3">
                                        Password Requirements
                                    </p>
                                    <ul className="space-y-2">
                                        {requirements.map((req, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm">
                                                {req.met ? (
                                                    <Check size={16} className="text-green-500 shrink-0" />
                                                ) : (
                                                    <X size={16} className="text-slate-300 shrink-0" />
                                                )}
                                                <span className={req.met ? "text-slate-700" : "text-slate-400"}>
                                                    {req.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            disabled={strengthScore < 3}
                            className={`w-full py-3 rounded-lg font-semibold transition-all ${strengthScore >= 3
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordStrength;