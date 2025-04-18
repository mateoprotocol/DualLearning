import React from 'react';

const Title = (props) => {
  return (
    <div class="page-title">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">{props.title}</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            {props.title !== 'Home' ? (<li class="current">{props.title}</li>):(<></>)}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Title;