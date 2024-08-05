import React, { useEffect, useState } from "react";

export default function Learning3_useEffect() {
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);

  const handleResize = () => {
    console.log("Window resized: ",window.innerWidth )
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("resize event removed");
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceWidth]);

  return (
    <>
      <h1>Device Width</h1>
      <h1> {deviceWidth}</h1>
    </>
  );
}
