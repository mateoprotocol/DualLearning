import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import { Container } from 'react-bootstrap';
import { getFormattedDate } from '../utils/util';
import { createMarkup } from '../utils/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';

import blogEntries from '../content/home/blog-entries.json';

const Article = () => {
    const [searchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'), 10);
    const entry = blogEntries.find(item => item.id === id);
    const { t } = useTranslation();

    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/articles/' + entry?.content)
            .then(response => response.text())
            .then(html => {
                const sanitizedHTML = DOMPurify.sanitize(html);
                setHtmlContent(sanitizedHTML);
            });
    }, [entry]);

    return (
        <>
            <Title title={t('Article.title')} />
            <div className='row'>
                <div className='col-lg-12 blog-details section'>
                    <Container className='container'>
                        <article className="article">
                            <h2 className="title">{entry?.title}</h2>
                            <div className="meta-top">
                                <ul>
                                    <li className="d-flex align-items-center"><FontAwesomeIcon icon={faUser} className='p-2' /><a href="#">{entry?.author}</a></li>
                                    <li className="d-flex align-items-center"><FontAwesomeIcon icon={faClock} className='p-2' /><a href="#"><time dateTime={entry?.publishDate}>{getFormattedDate(new Date(entry?.publishDate + 'T00:00:00-05:00'))}</time></a></li>
                                </ul>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={createMarkup(htmlContent)}></div>
                            <div className="meta-bottom">
                                <i className='p-2'><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon></i>
                                <ul className="tags">
                                    {entry?.tags.map(item => (
                                        <li key={entry.tags.indexOf(item)}><a href="#">{item}</a></li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </article>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Article;