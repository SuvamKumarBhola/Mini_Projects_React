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
    let StrengthColor = "red";

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

            {
                password &&(
                    <div style={{marginTop:"10px"}}>
                        <p>Password Strength: <strong>{StrengthLable.toUpperCase()}</strong></p>
                        <div style={{
                            height:"8px",
                            width:"250px",
                            backgroundColor:"#e0e0e0",
                            borderRadius:"4px",
                            overflow:"hidden",
                            marginTop:"10px",
                            position:"relative"
                        }}>
                        <div style={{
                            height:"100%",
                            width:`${StrengthCore/4}*100`,
                            backgroundColor:StrengthColor,
                            transition:"Width 0.3s ease-in-out",
                            borderRadius:"4px",
                            position:"absolute",
                            top:"0",
                            left:"0"
                        }}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PasswordStrength