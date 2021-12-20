import { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../../assets/js/modules/slider';

import './Gallery.scss';

const Gallery = ({ images }) => {
  const mainSliderEl = useRef(null);
  const navSliderEl = useRef(null);

  useEffect(() => {
    let mainSliderInstance = null;
    let navSliderInstance = null;

    if (mainSliderEl.current) {
      mainSliderInstance = new Slider(mainSliderEl.current, {
        contain: true,
        pageDots: false,
        fade: true,
      });
    }

    if (navSliderEl.current) {
      navSliderInstance = new Slider(navSliderEl.current, {
        contain: true,
        pageDots: false,
      });

      navSliderInstance?.flickity.on('staticClick', (e, pointer, cell, i) => {
        navSliderInstance?.flickity.select(i);
      });

      navSliderInstance?.flickity.on('change', (i) => {
        mainSliderInstance?.flickity?.select(i);
      });

      mainSliderInstance?.flickity.on('change', (i) => {
        navSliderInstance?.flickity.select(i);
      });
    }

    return () => {
      mainSliderInstance?.destroy();
      navSliderInstance?.destroy();
    };
  });

  if (!images.length) return null;

  return (
    <div className="gallery">
      {images.length === 1 ? (
        <div className="gallery__image">
          <img src={images[0]} alt="Ready meal" />
        </div>
      ) : (
        <>
          <ul ref={mainSliderEl}>
            {images.map((imageSrc) => (
              <li key={imageSrc} className="gallery__image">
                <img src={imageSrc} alt="Cooked dish" />
              </li>
            ))}
          </ul>

          <ul ref={navSliderEl}>
            {images.map((imageSrc) => (
              <li key={imageSrc} className="gallery__thumbnail">
                <img src={imageSrc} alt="Cooked dish" />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(Gallery);
