import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ searchQuery, onClick }) => {
  <ul className={s.ImageGallery}>
    {searchQuery &&
      searchQuery.map((img, i) => (
        <ImageGalleryItem key={img.id} img={img} onClick={() => onClick(i)} />
      ))}
  </ul>;
};

export default ImageGallery;
