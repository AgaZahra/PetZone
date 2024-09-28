import React from 'react'
import { Link } from 'react-router-dom'

const BannerPages = ({itemOne,itemTwo}) => {
  return (
    <>
     <div className="hero-container">
        <div className="hero">
          <h2>{itemOne}</h2>
          <h5> <Link to='/'>{itemTwo}</Link> - {itemOne} </h5>
        </div>
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 250"
            style={{ enableBackground: 'new 0 0 1920 250' }}
            xmlSpace="preserve"
          >
            <path d="M1920,250V70.5c-9.9,13.6-157.3-38.5-360.8-21.5c-264.4,22.1-412.9,143.5-721.5,62.1C325-24,186.4-18,0,35.1V250h960h480 H1920z"></path>
          </svg>
        </div>
      </div>
      {/* Hero-End */}
    </>
  )
}

export default BannerPages