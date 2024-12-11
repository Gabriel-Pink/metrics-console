import { formatIp } from "@/utils/formatIp"

interface ConnectionBoxHeaderProps {
    ip: string
}

export function ConnectionBoxHeader( { ip }: ConnectionBoxHeaderProps ) {

    return (
        <div className="bg-emerald-500 px-5 py-3 text-white rounded">
            <h2>
                Conexao de {formatIp({ ip })}
            </h2>
        </div>
    )

}