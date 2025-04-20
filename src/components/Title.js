import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Title = (props) => {
  const { t } = useTranslation();
  const homeOption = t('Home.title')
  return (
    <div className="page-title">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">{props.title}</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link to="/#">{homeOption}</Link></li>
            {props.title !== homeOption ? (<li className="current">{props.title}</li>):(<></>)}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Title;