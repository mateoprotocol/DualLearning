import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import Title from '../../components/Title';
import { Container } from 'react-bootstrap';
import '../../assets/css/chat.css';
import ChatBody from './ChatBody';
import ChatUsers from './ChatUsers';

import chats from '../../content/chatsimulation/chat.json';
import Drawer from '../../components/Drawer';
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
    const [isOpen, setOpen] = useState(false);
    const refContainer = useRef();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (refContainer.current) {
            setDimensions({
                width: refContainer.current.offsetWidth,
                height: refContainer.current.offsetHeight,
            });
        }
    }, []);
    const { t } = useTranslation();

    const selectChat = (currentChat) => {
        setChat(currentChat);
    };
    const triggerChatToggle = (val) => {
        setOpen(val);
    }

    return (
        <>
            <Title title={t('ChatSimulation.title')} />
            <Container className='container'>
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-inside-lg decor-default chat" style={{ overflow: 'scroll', outline: 'none' }} tabIndex="5000">
                                <ChatUsers chats={chats} selectChat={selectChat} triggerChatToggle={triggerChatToggle}></ChatUsers>
                            </div>
                        </div>
                        <Drawer show={isOpen ?? false}
                            content={(
                                <div className="col-sm-12 chat" style={{ overflow: 'scroll', outline: 'none' }} tabIndex="5001" ref={refContainer}>
                                    <ChatBody chat={chat ?? mostRecentChat} triggerChatToggle={triggerChatToggle}></ChatBody>
                                </div>
                            )}
                            dimensions={dimensions}></Drawer>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ChatSimulation;