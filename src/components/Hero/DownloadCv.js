import React from "react";
import Button from "../../styles/GlobalComponents/Button";
// import CV from "../../files/CV2023.pdf";

function DownloadCv() {

    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("CV2023.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "CV2023.pdf";
                alink.click();
            });
        });
    };


  return <Button onClick={onButtonClick}>Descargar CV</Button>;
}

export default DownloadCv;
