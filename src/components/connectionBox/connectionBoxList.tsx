import { ActivityData } from "@/model/activityData";
import { TimestampToHour } from "../TimestampToHour";

export function ConnectionBoxList( { list }: { list: ActivityData[] } ) {

    return (
        <div className="mt-5">

            <div className="bg-gray-300 py-3 rounded">
                <h2 className="text-center font-semibold text-sm">Logs</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full font-semibold text-sm py-3">
                <div>Evento</div>
                <div>Descricao</div>
                <div>Horario</div>
            </div>
            {
                list.length > 0 ?
                    ([...list].reverse().map((item: ActivityData, key) => (
                        <div key={key} className="grid grid-cols-3 gap-4 w-full">
                            <p className="text-gray-600 text-sm">{item.actionType}</p>
                            <p className="text-gray-600 text-sm">{item.content}</p>
                            {
                                item.actionTime && <TimestampToHour timestamp={item.actionTime} />
                            }
                            
                        </div>
                    )))

                :

                    (
                        <div className="w-full flex justify-center text-gray-600 text-sm">Nenhuma log registrada</div>
                    )
            }
            
        </div>
    )
}