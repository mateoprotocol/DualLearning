import React from 'react';
import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import wordsOfTheDay from '../content/word-of-the-day.json';

const getFormattedDate = () => {
    return new Date()
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })
        .replace(',', '')
        .replace(/(\d+)$/, "'$1");
}

const date = new Date()
const formattedDt = ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
const wordOfTheDay = wordsOfTheDay.find(item => item.scheduledDate === formattedDt)

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Title title={t('Home.title')} />
            <section className="section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="post-entry lg">
                                <a href="blog-details.html"><img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid" /></a>
                                <div className="post-meta"><span className="date">{t('Home.wordOfTheDay')}</span> <span className="mx-1">•</span> <span>{getFormattedDate()}</span></div>
                                <h2>{wordOfTheDay.word}</h2>
                                <p className="mb-4 d-block">{wordOfTheDay.definition}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;