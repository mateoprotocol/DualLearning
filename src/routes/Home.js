import React from 'react';
import Title from '../components/Title';

const Home = () => {
    return (
        <>
            <Title title="Home" />
            <section className="section">
                <div class="container section-title">
                    <div class="section-title-container d-flex align-items-center justify-content-between">
                        <h2>Home</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;