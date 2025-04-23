import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useTranslation } from "react-i18next";
import { Container } from 'react-bootstrap';
import { getFormattedDate } from '../utils/util';
import Title from '../components/Title';
import wordsOfTheDay from '../content/word-of-the-day.json';
import blogEntries from '../content/home/blog-entries.json';
import { createMarkup } from '../utils/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import { Link } from 'react-router-dom';

const getMostRecentEntry = (blogEntries) => {
    const today = new Date();

    // Filter entries where publishDate is not in the future
    const validEntries = blogEntries.filter(entry => new Date(entry.publishDate) <= today);

    // If no valid entries, return null
    if (validEntries.length === 0) return null;

    // Find the most recent one
    return validEntries.reduce((latest, current) => {
        return new Date(current.publishDate) > new Date(latest.publishDate) ? current : latest;
    });
}

const date = new Date()
const formattedDt = ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
const wordOfTheDay = wordsOfTheDay.find(item => item.scheduledDate === formattedDt)
const mostRecentArticle = getMostRecentEntry(blogEntries)

const Home = () => {

    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/articles/' + mostRecentArticle.content)
            .then(response => response.text())
            .then(html => {
                const sanitizedHTML = DOMPurify.sanitize(html);
                setHtmlContent(sanitizedHTML);
            });
    }, []);

    const { t } = useTranslation();
    return (
        <>
            <Title title={t('Home.title')} />
            <section className="section">
                <Container className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="post-entry lg">
                                <div className="post-meta"><span className="date">{t('Home.wordOfTheDay')}</span> <span className="mx-1">•</span> <span>{getFormattedDate()}</span></div>
                                <h2>{wordOfTheDay.word}</h2>
                                <p className="mb-4 d-block">{wordOfTheDay.definition}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <section id="blog-details" className="blog-details section">
                                <Container className="container">
                                    <article className="article">
                                        <h2 className="title">{mostRecentArticle.title}</h2>
                                        <div className="meta-top">
                                            <ul>
                                                <li className="d-flex align-items-center"><FontAwesomeIcon icon={faUser} className='p-2' /><a href="#">{mostRecentArticle.author}</a></li>
                                                <li className="d-flex align-items-center"><FontAwesomeIcon icon={faClock} className='p-2' /><a href="#"><time dateTime={mostRecentArticle.publishDate}>{getFormattedDate(new Date(mostRecentArticle.publishDate + 'T00:00:00-05:00'))}</time></a></li>
                                            </ul>
                                        </div>
                                        <div className="content" dangerouslySetInnerHTML={createMarkup(htmlContent)}></div>

                                        <div className="meta-bottom">
                                            <i className='p-2'><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon></i>
                                            <ul className="tags">
                                                {mostRecentArticle.tags.map(item => (
                                                    <li key={mostRecentArticle.tags.indexOf(item)}><a href="#">{item}</a></li>
                                                ))
                                                }
                                            </ul>
                                        </div>

                                    </article>
                                </Container>
                            </section>
                        </div>
                        <div className="col-lg-4 sidebar">
                            <div className="widgets-container">
                                <div className="recent-posts-widget widget-item">
                                    <h3 className="widget-title">{t('Home.recentPosts')}</h3>
                                    {blogEntries
                                        .filter(i => new Date(i.publishDate) <= date)
                                        .sort((a, b) => b.id - a.id).map(item => (
                                        <div key={item.id} className="post-item">
                                            <img src={process.env.PUBLIC_URL + `/images/${item.thumbnail}`} alt="" className="flex-shrink-0" />
                                            <div>
                                                <h4><Link to={`/article?id=${item.id}`}>{item.title}</Link></h4>
                                                <time dateTime={item.publishDate}>{getFormattedDate(new Date(item.publishDate + 'T00:00:00-05:00'))}</time>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;