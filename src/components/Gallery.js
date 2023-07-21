import React from 'react';
import { Link } from 'react-router-dom';
import photosData from './PhotoData';
import ClickableImage from './ClickableImage';

const Gallery = () => {
    const firstPhoto = photosData[0]; // Get the first photo separately

    return (
        <div className="columns-1 sm:columns-2 xl:columns-3 lg:gap-12 m-3 lg:m-10">
            <ClickableImage photo={firstPhoto} />

            {photosData.slice(1).map((photo) => (
                <ClickableImage key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default Gallery;
