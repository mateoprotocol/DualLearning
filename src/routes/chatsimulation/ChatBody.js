import React from 'react';
import { useTranslation } from "react-i18next";
import { formatTo12Hour, getFormattedDate, isOneDayOlder } from '../../utils/util';

const ChatBody = (props) => {
    const { t } = useTranslation();
    let lastMessageTimestamp = null;
    return (
        <>
            <div className="decor-default chat-body-container">
                <div className="border-bottom profile-user">
                    <div className="d-flex align-items-center py-1">
                        <div className="position-relative">
                            <img src={process.env.PUBLIC_URL + `/images/${props.chat.image}`} className="rounded-circle mr-1" alt={props.chat.chatTitle} width="40" height="40" />
                        </div>
                        <div className="flex-grow-1 details">
                            <strong>{props.chat.chatTitle}</strong>
                            <div className="text-muted small">
                                {props.chat.participants?.length > 1 ? (
                                    <em>{props.chat.participants.join(', ') + ', ' + t('ChatSimulation.you')}</em>
                                ) :
                                    (
                                        <em>
                                            {props.chat.online ? t('ChatSimulation.online') : ''}
                                            {(props.chat.online && props.chat?.statusMessage.length > 0) ? ": " : ""}
                                            {props.chat.statusMessage?.length > 0 ? props.chat.statusMessage : ""}
                                        </em>
                                    )}
                            </div>
                        </div>
                        <div className='btn-group'>
                            <button className="btn btn-light border">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </button>
                            <button className="btn btn-light border">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chat-body col-inside-lg row">
                    <div className='col-12'>

                        {props.chat.messages.map(message => {
                            const output = (
                                <div key={message.id}>
                                    {isOneDayOlder(lastMessageTimestamp, message.timestamp) ?
                                        (
                                            <div class="center-with-lines">
                                                <em class="text text-muted small">{getFormattedDate(new Date(message.timestamp))}</em>
                                            </div>
                                        ) : (<></>)}
                                    <div className={`answer ${message.self ? "right" : "left"}`}>
                                        <div className="avatar">
                                            <img src={
                                                message.self ?
                                                    process.env.PUBLIC_URL + `/images/chat-user-01.png` :
                                                    props.chat.participants?.length > 1 ?
                                                        process.env.PUBLIC_URL + `/images/${message.image}` :
                                                        process.env.PUBLIC_URL + `/images/${props.chat.image}`
                                            } alt={message.sender} />
                                        </div>
                                        <div className="text">
                                            <div className="name">{message.sender}</div>
                                            <div className='row'>
                                                <div>{message.content}</div>
                                                <div className="time">{formatTo12Hour(message.timestamp, [t('ChatSimulation.am'), t('ChatSimulation.pm')])}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            lastMessageTimestamp = message.timestamp
                            return output
                        })}
                    </div>
                    <div className='answer-add-container col-12'>
                        <div className="answer-add">
                            <div>{t('ChatSimulation.reply')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBody;