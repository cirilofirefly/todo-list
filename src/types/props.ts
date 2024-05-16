export type ButtonType = "submit" | "reset" | "button" | undefined;
export type ButtonColor = 'primary' | 'success' | 'error' | 'light' | 'transparent';

export interface ButtonProps {
    type?: ButtonType;
    text?: string;
    block?: boolean;
    color?: ButtonColor;
    disabled?: boolean;
    loading?: boolean;
}

export type InputType = 'text' | 'password' | undefined;

export interface InputProps {
    value: string;
    disabled: boolean;
    name: string
    type: InputType
}