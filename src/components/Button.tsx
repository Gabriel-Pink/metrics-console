"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    title?: string;

    variant?: "primary" | "secondary";
}

export function Button(props: ButtonProps) {

    return(
        <button {...props} className="border">
            { props.title }
        </button>
    )

}