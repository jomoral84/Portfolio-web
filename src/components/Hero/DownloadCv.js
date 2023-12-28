import React from "react";
import Button from "../../styles/GlobalComponents/Button";


function DownloadCv() {
  const onButtonClick = () => {
    const pdfUrl = "files/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <Button onClick={onButtonClick}>Descargar CV</Button>;
}

export default DownloadCv;
