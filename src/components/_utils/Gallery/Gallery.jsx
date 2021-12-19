import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.scss';

const Gallery = ({ images, thumbnails }) => {

  if (!images.length) return null;

  return (
    <div className="gallery">
      {images.length === 1 ? (
        <div className="gallery__image">
          <img src={images[0]} alt="Ready meal" />
        </div>
      ) : (
        <ul className="gallery__images">
          {images.map((imageSrc) => (
            <li key={imageSrc} className="gallery__image">
              <img src={imageSrc} alt="Cooked dish" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
