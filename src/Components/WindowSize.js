import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWindowWidth] = useState(window.screen.width);

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.addEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <div className="main__style">
            <p className="p__style"> The actual size  👇 of the window is</p>
            <h1 className="num__style"> {width} </h1>
      </div>
    </>
  );
};

export default WindowSize;
