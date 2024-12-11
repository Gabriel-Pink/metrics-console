import { formatIp } from "@/utils/formatIp";
import { ReactNode } from "react";
import { Timer } from "../Timer";

interface ConnectionBoxBodyProps {
    children?: ReactNode;
    connectionId: string;
    ip: string;
    connectionTime: number
}

export function ConnectionBoxBody({ children, connectionId, ip, connectionTime }: ConnectionBoxBodyProps) {
    return (
        <div className="px-5 py-3">

            <div className="grid grid-cols-3 gap-4 w-full ">
                <div>
                    <h3 className="font-semibold text-sm">ID de conexao</h3>
                    <p className="text-gray-600 text-sm">{ connectionId }</p>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">IP</h3>
                    <p className="text-gray-600 text-sm">{ formatIp({ ip }) }</p>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">Tempo de permanencia</h3>
                    <Timer timestamp={connectionTime} />
                    
                </div>
                
            </div>
            
            { children }
        </div>
    )
}