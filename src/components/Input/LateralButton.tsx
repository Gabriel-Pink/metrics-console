"use client";

import { CornerDownLeft } from "lucide-react";

interface LateralButtonProps {
    border: "rounded" | "full-rounded" | "normal";
    Icon?: React.ElementType;
}

export function LateralButton( { border = "rounded", Icon = CornerDownLeft }: LateralButtonProps ) {
    return (
        <button className="bg-blue-500 text-white font-semibold py-2 px-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300s absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl">
            <Icon size={20} />
        </button>
    );
}