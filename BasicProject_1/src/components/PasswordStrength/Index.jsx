import React, { useState } from 'react'

function PasswordStrength() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    const StrengthCore = [
        hasMinLength,
        hasLowercase,
        hasUppercase,
        hasNumber,
        hasSpecialChar
    ].filter(Boolean).length;

    let StrengthLable = "Weak";
    if (StrengthCore === 4) {
        StrengthLable = "Strong"
    } else if (StrengthCore === 3) {
        StrengthLable = "Medium"
    } else {
        StrengthLable = "Weak"
    }

    return (
        <div className='Conatiner'>
            <h2>Signup</h2>
            <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}

export default PasswordStrength