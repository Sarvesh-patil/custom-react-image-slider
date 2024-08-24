import React, { useState, useEffect } from "react";

const imageUrls = [
  "https://images.pexels.com/photos/4007642/pexels-photo-4007642.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5916954/pexels-photo-5916954.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6226956/pexels-photo-6226956.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600"
];
export const SliderImage = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [activeImage]);

  const handleNext = () => {
    setActiveImage((prevActiveImage) =>
      activeImage === imageUrls.length - 1 ? 0 : prevActiveImage + 1
    );
  };

  const handlePrevious = () => {
    setActiveImage((prevActiveImage) =>
      activeImage === 0 ? imageUrls.length - 1 : prevActiveImage - 1
    );
  };

  return (
    <div>
      <h1>Image Slider components</h1>

      <div className="slideWrapper">
        <span className="navButton" onClick={handlePrevious}>
          Previous
        </span>
        {imageUrls.map((url, i) => (
          <img
            key={url}
            src={url}
            alt={`image ${i}`}
            className={activeImage === i ? "show-image" : "hide-image"}
          />
        ))}
        <span className="navButton" onClick={handleNext}>
          Next
        </span>
      </div>
    </div>
  );
};
