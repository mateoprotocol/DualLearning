import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Title from '../../components/Title';
import { Container } from 'react-bootstrap';
import '../../assets/css/chat.css';
import ChatBody from './ChatBody';
import ChatUsers from './ChatUsers';

import chats from '../../content/chatsimulation/chat.json';
const getMostRecentChat = (chats) => {
    return chats.reduce((latestChat, currentChat) => {
        const getLatestTimestamp = chat =>
            Math.max(...chat.messages.map(m => new Date(m.timestamp).getTime()));

        const latestTime = getLatestTimestamp(latestChat);
        const currentTime = getLatestTimestamp(currentChat);

        return currentTime > latestTime ? currentChat : latestChat;
    });
};
const mostRecentChat = getMostRecentChat(chats);

const ChatSimulation = () => {
    const [chat, setChat] = useState(mostRecentChat);
    const { t } = useTranslation();

    const selectChat = (currentChat) => {
        setChat(currentChat);
    };

    return (
        <>
            <Title title={t('ChatSimulation.title')} />
            <Container className='container'>
                <div className="blog-details section">
                    <article className="article">
                        <div className="content container-fluid">
                            <div className="row">
                                <div className="col-sm-3 col-xs-12">
                                    <div className="col-inside-lg decor-default chat" style={{ overflow: 'scroll', outline: 'none' }} tabIndex="5000">
                                        <ChatUsers chats={chats} selectChat={selectChat}></ChatUsers>
                                    </div>
                                </div>
                                <div className="col-sm-9 col-xs-12 chat" style={{ overflow: 'scroll', outline: 'none' }} tabIndex="5001">
                                    <ChatBody chat={chat ?? mostRecentChat}></ChatBody>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </>
    );
};

export default ChatSimulation;