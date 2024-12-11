"use client";

import { useEffect, useState } from 'react';

export function useWebsocket(url: string) {

    const [users, setUsers] = useState<Map<string, any>>(new Map());


    const receiveHandlers = {

        USER_LIST: (messageData: any) => {
            
            const usersMap = new Map(Object.entries(messageData));
            setUsers(usersMap);

        },

        LOG: (messageData: any) => {

            setUsers(prevUsers => {
                const newUsers = new Map(prevUsers)

                const userToUpdate = newUsers.get(messageData.from);

                if( userToUpdate ) {
                    const updatedUser = {
                        ...userToUpdate,
                        userActivities: [...userToUpdate.userActivities, { actionType: messageData.actionType, content: messageData.content, actionTime: messageData.actionTime }]
                    }

                    newUsers.set(messageData.from, updatedUser);
                }


                


                return newUsers;
            });

        },

        CONN_RECV: ( messageData: any ) => {
            
            setUsers(prevUsers => {
                const newUsers = new Map(prevUsers);
                newUsers.set(
                  messageData.connectionId,
                  {
                    userActivities: messageData.userActivities,
                    entryTime: messageData.entryTime,
                    ip: messageData.ip,
                  }
                );
                return newUsers;
            });

            // setUsers(newUsers);

        },

        CONN_LOST: (messageData: any) => {

            setUsers(prevUsers => {
                const newUsers = new Map(prevUsers);
                newUsers.delete(messageData.connectionId);

                return newUsers;
            })

        }

    }

    useEffect(() => {
        const ws = new WebSocket(url);
    
        ws.onopen = () => {
          console.log('Conectado ao servidor WebSocket');
        };
    
        ws.onmessage = (event) => {
          

          const messageData = JSON.parse(event.data);

          console.log(messageData)

          if (messageData.type in receiveHandlers) {

            receiveHandlers[messageData.type as keyof typeof receiveHandlers](messageData.data);

          } else {
            console.warn('Tipo de mensagem desconhecido:', messageData.type);
          }
        };
    
        ws.onclose = () => {
          console.log('Desconectado do servidor WebSocket');
        };
    
        
    
        return () => {
          ws.close();
        };
      }, [url]);
    
    //   const sendMessage = (msg: string) => {
    //     if (socket && socket.readyState === WebSocket.OPEN) {
    //       socket.send(msg);
    //     }
    //   };

    return { users }

}