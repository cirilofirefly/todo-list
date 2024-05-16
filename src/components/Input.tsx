import { InputProps } from "../types/props"

export default function Input({ type, disabled, name, value }, InputProps) {
    return(
        <>
            <input className="rounded border-2" type={type} name={name} id={name} value={value} disabled={disabled} />
        </>
    )
}