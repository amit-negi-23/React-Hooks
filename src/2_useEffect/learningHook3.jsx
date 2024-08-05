import React, { useEffect, useState } from "react";

export default function Learning3_useEffect() {
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);

  const currentWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentWidth);

    return () => {
      console.log("old event removed");
      window.removeEventListener("resize", currentWidth);
    };
  }, [deviceWidth]);

  return (
    <>
      <h1>Device Width</h1>
      <h1> {deviceWidth}</h1>
    </>
  );
}
