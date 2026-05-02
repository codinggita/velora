import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Velora` : 'Velora - Smart Personal Finance'}</title>
            <meta name="description" content={description || 'Take control of your family finances with Velora.'} />
            <meta name="keywords" content={keywords || 'finance, budget, money, tracker, family, savings'} />
        </Helmet>
    );
};

export default SEO;
