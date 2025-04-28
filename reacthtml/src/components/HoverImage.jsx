import React, { useState } from 'react';

function HoverImage({ src, alt, className, ...rest }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
  };

  const hoverStyle = {
    transform: isHovering ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    filter: isHovering ? 'brightness(1.2)' : 'brightness(1)',
    boxShadow: isHovering ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={hoverStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest} 
    />
  );
}
export default HoverImage;