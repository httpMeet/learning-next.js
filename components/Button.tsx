"use client"

export default function Button(){
    return (
        <button 
            onClick={() => {
                alert("Button clicked!");
            }}
        >
            Click me!
        </button>
    )
}