import React from 'react';
import { useTranslation } from "react-i18next";

const ChatUsers = (props) => {
    const { t } = useTranslation();

    const handleClick = (selectedChat) => {
        props.selectChat(selectedChat)
    }

    return (
        <>
            <div className="chat-users">
                {props.chats
                    .sort((a, b) => {
                        const getLatestTimestamp = chat =>
                            Math.max(...chat.messages.map(m => new Date(m.timestamp).getTime()));
                        return getLatestTimestamp(b) - getLatestTimestamp(a);
                    })
                    .map(item => (
                        <div key={item.id} className='user-container'>
                            <div className="user" onClick={() => handleClick(item)}>
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + `/images/${item.image}`} alt={item.chatTitle} />
                                    <div className={`status ${item.online ? "online" : "offline"}`}></div>
                                </div>
                                <div className="name">{item.chatTitle}</div>
                                {item.messages?.length > 0 ? (
                                    <div className="mood">{item.messages.at(-1).self ? t('ChatSimulation.you') + ": " : ""}{item.messages.at(-1).content}</div>
                                ): (
                                    <div className='mood'>{item.online ? t('ChatSimulation.online') : t('ChatSimulation.offline')}</div>
                                )}
                                
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ChatUsers;