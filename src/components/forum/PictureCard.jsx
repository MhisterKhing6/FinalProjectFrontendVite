import React from 'react';
import LazyImage from './LazyImage';
import './PictureCard.css';

const PictureCard = ({ src}) => {
    return (
        <div className="picture-card">
            <div className="picture-content">
                <LazyImage src={src} alt="Shared Content" />
            </div>
        </div>
    );
};

export { PictureCard };

