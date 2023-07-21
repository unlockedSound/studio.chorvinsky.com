import React from 'react';
import { Link } from 'react-router-dom';

const ClickableImage = ({ photo }) => {
    return (
        <Link to={`/photo/${photo.id}`}>
            <img
                src={photo.image}
                alt={photo.altText}
                className="w-full aspect-auto relative bg-black dark:bg-white p-3 mt-8 cursor-pointer"
            />
        </Link>
    );
};

export default ClickableImage;
