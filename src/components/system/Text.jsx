import React from 'react';
import scribble from "../../fillers/scribble.png";

const TypographyComponent = ({ type = "base", className = "", style = {}, children, ...props }) => {
  const baseClass = "font-display font-semibold";
  const responsiveTextSize = "max-md:text-[2rem]";
  const leading = "leading-[120%]";

  const classes = {
    h1: `${baseClass} text-[56px] ${responsiveTextSize} ${leading}`,
    h2: `${baseClass} text-5xl ${responsiveTextSize} ${leading}`,
    h3: `text-[2.5rem] tracking-tight ${baseClass} max-md:text-3xl ${leading}`,
    h4: `text-2xl tracking-normal ${baseClass}`,
    p: "text-lg max-md:text-base",
    span: "text-lg max-md:text-base",
    lg: "text-2xl font-bold tracking-tight max-md:text-lg",
    base: "text-xl max-md:text-base",
    regular: "text-lg max-md:text-base",
    sm: "text-base",
    xs: "text-base",
    subtitle: `text-xl max-md:text-base uppercase font-extrabold text-center`,
  };

  const Element = type.match(/h[1-4]|p|span/) ? type : 'div';
  const elementClass = `${classes[type] || ""} ${className}`;

  let elementStyle = { ...style };
  if (type === "subtitle") {
    elementStyle = { letterSpacing: "0.1em", ...style };
  }

  return (
    <Element className={elementClass} style={elementStyle} {...props}>
      {children}
    </Element>
  );
};

export default TypographyComponent;
