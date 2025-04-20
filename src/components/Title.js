import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Title = (props) => {
  const { t } = useTranslation();
  const homeOption = t('Home.title')
  return (
    <div class="page-title">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">{props.title}</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><Link to="/#">{homeOption}</Link></li>
            {props.title !== homeOption ? (<li class="current">{props.title}</li>):(<></>)}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Title;