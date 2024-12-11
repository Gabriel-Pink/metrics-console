"use client";

import { parseCookies } from 'nookies'

import { useWebsocket } from '@/hooks/useWebsocket';
import { ActivityData } from '@/model/activityData';

import { ConnectionBox } from "@/components/connectionBox";

export function WsConnection() {

    const cookies = parseCookies();
    const authToken = cookies.authToken

    const { users } = useWebsocket(`ws://107.20.127.159:8080/authorization=${authToken}`);

    
    return (
        <div className="p-5">
            <ul className='flex flex-col gap-4'>
                {
                    [...users].reverse().map(([key, value]) => (


                        <ConnectionBox.Root key={key} >
                            <ConnectionBox.Header ip={value.ip} />
                            <ConnectionBox.Body connectionId={key} ip={value.ip} connectionTime={value.entryTime}>
                                <ConnectionBox.List list={value.userActivities} />
                            </ConnectionBox.Body>

                        </ConnectionBox.Root>
                        

                    ))
                }
            </ul>
        </div>
    );


}