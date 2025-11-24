import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

function Image({
  src,
  alt = "Image Name",
  className = "",
  width,
  height,
  ...props
}) {
  // If no src is provided or src is an empty string, show placeholder
  if (!src || src.trim() === '') {
    return (
      <ImagePlaceholder 
        width={width} 
        height={height} 
        className={className}
        text={alt || 'Image à venir'}
      />
    );
  }

  // If src is provided, show the actual image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default Image;
