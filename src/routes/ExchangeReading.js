import React from 'react';
import Title from '../components/Title';
import readingList from '../content/exchange-reading.json'

const ExchangeReading = () => {
    return (
        <>
            <Title title="Language Exchange Reading" />
            <section className="section">
            </section>
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-12 content">
                        <ol>
                            {readingList.map(item => (
                                <li>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExchangeReading;