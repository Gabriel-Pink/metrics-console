interface ConnectionBoxHeaderProps {
    ip: string
}

export function formatIp({ ip }: ConnectionBoxHeaderProps) {
    if (ip.startsWith("::ffff:")) {
        return ip.replace("::ffff:", "");
    }
    return ip;
}