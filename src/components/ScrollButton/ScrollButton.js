import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import useStyles from "./scrollButton_style";

const ScrollButton = () => {

  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

 
  // Muestra el boton cuando la pagina llega a bajar lo suficiente
  const toggleVisibility = () => {
    if (window.pageYOffset > 1300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0 and make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div >
      {isVisible && 
        <IconButton onClick={scrollToTop} className={classes.toTop}>
           <ExpandLessIcon/>
        </IconButton>
      }
    </div>
  );
};

export default ScrollButton;
