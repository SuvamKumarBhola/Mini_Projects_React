import React, { useState } from 'react'

function RandomColor() {
    const [colorType, setColorType] = useState('hex')
    const [color, setColor] = useState('#000000')

    function handleRandomUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        let hexColor = '#'
        let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        for (let i = 0; i < 6; i++) {
            hexColor += hexArray[handleRandomUtility(hexArray.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRgbColor() {
        const r = handleRandomUtility(256)
        const g = handleRandomUtility(256)
        const b = handleRandomUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "background 0.3s ease",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
            <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "48px",
                borderRadius: "24px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px"
            }}>
                <h1 style={{
                    color: "#fff",
                    fontSize: "32px",
                    fontWeight: "600",
                    margin: "0",
                    letterSpacing: "-0.5px"
                }}>
                    Color Generator
                </h1>

                <div style={{
                    display: "flex",
                    gap: "12px"
                }}>
                    <button
                        onClick={() => setColorType('hex')}
                        style={{
                            padding: "12px 24px",
                            fontSize: "15px",
                            fontWeight: "500",
                            border: "none",
                            borderRadius: "12px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            background: colorType === 'hex' ? "#fff" : "rgba(255, 255, 255, 0.2)",
                            color: colorType === 'hex' ? color : "#fff",
                            boxShadow: colorType === 'hex' ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"
                        }}
                    >
                        HEX
                    </button>
                    <button
                        onClick={() => setColorType('rgb')}
                        style={{
                            padding: "12px 24px",
                            fontSize: "15px",
                            fontWeight: "500",
                            border: "none",
                            borderRadius: "12px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            background: colorType === 'rgb' ? "#fff" : "rgba(255, 255, 255, 0.2)",
                            color: colorType === 'rgb' ? color : "#fff",
                            boxShadow: colorType === 'rgb' ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none"
                        }}
                    >
                        RGB
                    </button>
                </div>

                <button
                    onClick={() => colorType === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}
                    style={{
                        padding: "16px 48px",
                        fontSize: "16px",
                        fontWeight: "600",
                        border: "none",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "#fff",
                        color: color,
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.2s ease",
                        transform: "scale(1)"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)"
                        e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.25)"
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"
                        e.target.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    Generate Random Color
                </button>

                <div style={{
                    textAlign: "center",
                    marginTop: "16px"
                }}>
                    <p style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "14px",
                        margin: "0 0 8px 0",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase"
                    }}>
                        {colorType === 'hex' ? "HEX Color" : "RGB Color"}
                    </p>
                    <h2 style={{
                        color: "#fff",
                        fontSize: "48px",
                        margin: "0",
                        fontWeight: "700",
                        letterSpacing: "-1px",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
                    }}>
                        {color}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default RandomColor