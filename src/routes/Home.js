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
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-8">
                            <div class="post-entry lg">
                                <a href="blog-details.html"><img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" /></a>
                                <div class="post-meta"><span class="date">{t('Home.wordOfTheDay')}</span> <span class="mx-1">•</span> <span>{getFormattedDate()}</span></div>
                                <h2>{wordOfTheDay.word}</h2>
                                <p class="mb-4 d-block">{wordOfTheDay.definition}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;