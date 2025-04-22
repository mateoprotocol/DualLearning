import React from 'react';
import Title from '../components/Title';
import readingList from '../content/mateos-ejercicios.json';

const ReadingExercises = () => {
    return (
        <>
            <Title title="Learning by Reading" />
            <section className="section">
            </section>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-12 content">
                        <ol>
                            {readingList.map(item => (
                                <li key={item.id}>
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

export default ReadingExercises;