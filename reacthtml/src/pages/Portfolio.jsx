import React from 'react';
import ExpandCollapse from '../components/ExpandCollapse';
const getImagePath = (filename) => `${import.meta.env.BASE_URL}pic/${filename}`;
const getVideoPath = (filename) => `${import.meta.env.BASE_URL}pic/${filename}`;

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="title2">
        <div className="k-1">
          <br />
          <br />
          <div className="text-c">
            <h2>Portfolio</h2>
            <p>Vällkommen till portfolio kul att du har hittat hit!</p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="p-box">
        <div className="p-cont1">
          <h3>Hybrid Fotografering</h3>
          <br />
          <p>Jag är en Hybrid fotograf! </p>
          <p>Vad innebär det att vara en “Hybrid”? Jo det innebär att jag både fotar och filmar under er bröllops dag! Filmdelen brukar innebär en enklare highlight film på dagen samt från de foto tillfällen ni önskar.</p>
        </div>
        <div className="p-image1">
          <img src={getImagePath("blom1.png")} alt="" />
        </div>
      </div>

      <div className="portfolio bilder">
        <br />
        <br />
        <h3>Bilder</h3>
        <br />
        <br />
        <div className="po-galleri">
          <img src={getImagePath("p1.png")} alt="" className="hover-image" />
          <img src={getImagePath("p3.png")} alt="" className="hover-image" />
          <img src={getImagePath("p2.png")} alt="" className="hover-image" />
          <img src={getImagePath("p5.png")} alt="" className="hover-image" />
          <img src={getImagePath("p4.png")} alt="" className="hover-image" />
          <img src={getImagePath("p6.png")} alt="" className="hover-image" />
        </div>
        <br />
        <ExpandCollapse title="Se mer">
          <img src={getImagePath("f7.png")} alt="" className="hover-image" />
          <img src={getImagePath("f8.png")} alt="" className="hover-image" />
          <img src={getImagePath("f4.png")} alt="" className="hover-image" />
          <img src={getImagePath("f5.png")} alt="" className="hover-image" />
        </ExpandCollapse>
      </div>

      <div className="portfolio videor">
        <br />
        <h3>Videor</h3>
        <br />
        <br />
        <br />
        <div className="po-galleri">
          <video src={getVideoPath("video2.mp4")} width="500" controls></video>
        </div>
        <br />
        <ExpandCollapse title="Se mer">
          <video src={getVideoPath("v2.mp4")} width="500" controls></video>
        </ExpandCollapse>
      </div>
    </div>
  );
}

export default Portfolio;