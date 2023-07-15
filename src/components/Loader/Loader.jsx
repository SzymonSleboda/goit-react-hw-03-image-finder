import React from 'react'
import SpinnerLoader from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
    <SpinnerLoader
      type="Bars"
      color="#ffffff"
      height={80}
      width={80}
    />
  </div>
  )
}

export default Loader;