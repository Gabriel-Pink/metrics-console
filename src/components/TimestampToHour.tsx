export function TimestampToHour({ timestamp }: { timestamp: number }) {
  const date = new Date(timestamp);

  // Extrair horas e minutos
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formatar o horário no formato HH:mm
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  // Retornar o horário formatado
  return <span>{formattedTime}</span>;
};