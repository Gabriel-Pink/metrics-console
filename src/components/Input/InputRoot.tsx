"use client";

import { ChangeEvent, ReactNode } from "react";

interface InputProps {
    children?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputRoot ( { children, onChange }: InputProps ) {

    return (
        <div className="relative">
            <input 
                className="border border-gray-300 rounded-xl p-3 py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onChange={onChange}
                type="password"
            />
            { children }
        </div>
    );

}