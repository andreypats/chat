import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import arnold from './arnold.png'

export type MessageType = {
    id: number,
    user: {avatar: string, name: string},
    message: {text: string, time: string}
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: arnold,
        name: 'Arnold Schwarzenegger',
    },
    message: {
        text: 'Hasta la vista, baby!',
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Brad Pitt',
    },
    message: {
        text: 'Hello, my old friend!',
        time: '22:01',
    },
}

const Mes = () => {
    return (
        <div id={'hw1'}>
            <div>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default Mes
