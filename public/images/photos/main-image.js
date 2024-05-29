import React from "react";

const MainImage = ({logo}) => {
  return (
    <svg
      width="450"
      height="450"
      viewBox="0 0 595 595"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'mx-auto'}
    >
      <circle cx="297.26" cy="297.26" r="297.26" fill={logo ? '#B51533' : '#2D9CDB'} />
    </svg>
  );
};

export default MainImage;
