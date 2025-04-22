import React from 'react';
import { useTranslation } from "react-i18next";
import Title from '../components/Title';

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <Title title={t('About.title')} />
        </>
    );
};

export default About;