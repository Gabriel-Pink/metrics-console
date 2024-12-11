import { ReactNode } from "react";

interface ConnectionBoxRootProrps {
    children?: ReactNode
}

export function ConnectionBoxRoot ( { children }: ConnectionBoxRootProrps ) {
    return (
        <div className="border-1 border-gray-300 bg-[#fcfcfc] rounded shadow-md transition-all duration-300 text-sm">

            { children }
            
        </div>
    );
}