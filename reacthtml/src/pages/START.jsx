import React from 'react';
import { Link } from "react-router-dom";
import Popup from "../components/Popup"; 
import HoverImage from '../components/HoverImage';
const getImagePath = (filename) => `${import.meta.env.BASE_URL}pic/${filename}`;


class START extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      promoText: '',
      promoImageSrc: '', 
      promotions: [ 
		{ img: getImagePath("b1.png"), text: "FÅNGA KÄRLEKEN OCH MINNEN!" },
		{ img: getImagePath("w1.png"), text: "FÅNGA DE BÄSTA BLICKEN I LIVET!" },
		{ img: getImagePath("w5.png"), text: "MAGISKA ÖGONBLICK - ER BRÖLLOPSFOTOGRAF!" },
		{ img: getImagePath("w6.png"), text: "ETT SAGABRÖLLOP - FÅNGAT I TIDLÖSA BILDER!" }
	  ],
    };
  }

  componentDidMount() {
    this.setRandomPromotion();
  }

  setRandomPromotion = () => {
    const { promotions } = this.state;
    const randomIndex = Math.floor(Math.random() * promotions.length);
    const randomPromotion = promotions[randomIndex];
    this.setState({
      promoText: randomPromotion.text,
      promoImageSrc: randomPromotion.img,
    });
  };

  togglePopup = () => {
    this.setState(prevState => ({ showPopup: !prevState.showPopup }));
  };

  render() {
    return (
      <div className="hero">
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button onClick={this.togglePopup}>Show Message</button>
        </div>

        <Popup show={this.state.showPopup} onClose={this.togglePopup} />

        <div className="hero-image">
          <h1 id="promo-text" className="promo-text">{this.state.promoText}</h1>
          <img id="promo-image" className="promo-image" src={this.state.promoImageSrc} alt="" />
        </div>

        <br /><br /><br />

        <div className="c-box22">
          <div className="tb">
            <br />
            <h1>AUTENTISKT PASSIONERAT OCH PERSONLIGT</h1>
            <br /><br /><br />
            <h3>
              Magiska Ögonblick - Er Bröllopsfotograf
              <br />
              Fånga kärleken och minnen - Tidlösa Bröllopsbilder För Er Stora Dag!
            </h3>
			<img src={getImagePath("k1.png")} alt="" />
			</div>
          <div className="h-image">
			<HoverImage src={getImagePath("g1.png")} alt="" className="hover-image" />
          </div>
          <br />
        </div>

        <div className="info-box">
          <div className="info-content">
            <h3>AR fotografering</h3>
            <br />
            <p>
              Att planera ett bröllop och inte hitta en fotograf som kan fånga känslan av den största dagen kan ibland vara svårt!
              Det gör det extra viktigt att ni känner tillit till er fotograf...
            </p>
          </div>
          <div className="image-content">
            <HoverImage src="pic/pr1.png" alt="" className="hover-image" />
          </div>
        </div>

        <div className="meet-box">
          <div className="image2-content">
            <HoverImage src="pic/b4.png" alt="" className="hover-image" />
          </div>
          <div className="text2-content">
            <h3>Träffa din fotograf</h3>
            <p>
              Det är jag som är Andreas! Jag älskar musik, fotografering, kalligrafi/skrivstil och schack...
            </p>
            <div className="button2-container">
              <Link to="/kontakt" className="btn">Ta kontakt</Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="header">
            <h2>Bokning<br />Process<br />Bröllop</h2>
          </div>
          <div className="subheaders">
            <p>Ta kontakt</p>
            <p>Möte</p>
            <p>Samtal innan bröllop</p>
            <p>Pris och paket</p>
            <p>Leverans</p>
            <p>Avbokning / Ombokning</p>
          </div>
        </div>

        <div className="slider">
          <div className="slide-track">
            <div className="slide"><img src={getImagePath("r1.png")} alt="" /></div>
            <div className="slide"><img src={getImagePath("r2.png")} alt="" /></div>
            <div className="slide"><img src="pic/r3.png" alt="" /></div>
			<div className="slide"><img src="pic/r4.png" alt="" /></div>
			<div className="slide"><img src="pic/r5.png" alt="" /></div>
			<div className="slide"><img src="pic/r6.png" alt="" /></div>
            <div className="slide"><img src="pic/f8.png" alt="" /></div>
            <div className="slide"><img src="pic/f6.png" alt="" /></div>
            <div className="slide"><img src="pic/r18.png" alt="" /></div>

			<div className="slide"><img src="pic/r1.png" alt="" /></div>
            <div className="slide"><img src="pic/r2.png" alt="" /></div>
            <div className="slide"><img src="pic/r3.png" alt="" /></div>
			<div className="slide"><img src="pic/r4.png" alt="" /></div>
			<div className="slide"><img src="pic/r5.png" alt="" /></div>
			<div className="slide"><img src="pic/r6.png" alt="" /></div>
            <div className="slide"><img src="pic/f8.png" alt="" /></div>
            <div className="slide"><img src="pic/f6.png" alt="" /></div>
            <div className="slide"><img src="pic/r18.png" alt="" /></div>

          </div>
        </div>
      </div>
    );
  }
}
export default START;