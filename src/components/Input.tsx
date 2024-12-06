"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {

    return(
        <input {...props} className="border" />
    )

}