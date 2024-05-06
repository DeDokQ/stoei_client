import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsPage = () => {
    const location = useLocation();
    const { nevs } = location.state;

    return (
        <div>
            <h1>{nevs.title}</h1>
            <p>{nevs.description}</p>
        </div>
    );
};

export default NewsPage;