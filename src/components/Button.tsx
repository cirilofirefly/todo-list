import { useEffect, useState } from "react"
import { ButtonColor, ButtonProps, ButtonType } from "../types/props";

export default function Button({ 
    type = "button", 
    text = 'Button Component', 
    block = false, 
    color = 'primary', 
    disabled = false, 
    loading= false }, 
    ButtonProps
)  {

    const [classStyle, setClassStyle] = useState<ButtonColor>('primary');

    useEffect(() => {
        setClassStyle({
            'primary' : 'bg-primary-100 hover:bg-primary-200 active:bg-primary disabled:bg-primary-100/80',
            'success' : 'bg-green-600 hover:bg-green-700 active:bg-green-500 disabled:bg-green-500',
            'error' : 'bg-green-600 hover:bg-green-700 active:bg-green-500 disabled:bg-green-500',
            'light' : 'bg-green-600 hover:bg-green-700 active:bg-green-500 disabled:bg-green-500',
            'transparent' : 'bg-green-600 hover:bg-green-700 active:bg-green-500 disabled:bg-green-500',
        }[color]);

    }, [color]);

    return (
        <>
            <button 
                type={type} 
                className={`rounded py-1 px-4 ${classStyle}`} 
                disabled={disabled || loading}
            >
                {text}
            </button>
        </>
    )
}