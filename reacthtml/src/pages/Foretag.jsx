import React from "react";
import{Link} from "react-router-dom";
const getImagePath = (filename) => `${import.meta.env.BASE_URL}pic/${filename}`;

class Foretag extends React.Component {
  render() {
    return (
      <div> 
        <div className="hero-image">
          <img src={getImagePath("f1.png")} alt="" className="hover-image" />
        </div>

        <div className="title">
          <h2>Företags- och eventfotografering</h2>
          <br />
          <br />
        </div>

        <div className="f-box1">
          <div className="f-content1">
            <h3>Letar du efter en erfaren fotograf?</h3>
            <br />
            <p>
              Jag erbjuder tjänster för företag, organisationer och privatpersoner och fångar det som är viktigt för dig och
              dina behov! Med mer än 8 års erfarenhet inom foto hjälper jag dig med allt från stilrena porträtt, produktbilder
              till verksamhetsfotografier och miljöbilder.
              Jag skräddarsyr bilder som passar din verksamhets
              behov snabbt, effektivt och med hög kvalitet.
            </p>
          </div>
          <br />
          <div className="f-image1">
            <img src={getImagePath("f0.png")} alt="" className="hover-image" />
          </div>

          <div className="f-bot1">
		  <Link to="/kontakt" className="btn">Ta kontakt</Link>
          </div>
        </div>

        <div className="portfolio">
          <br />
          <h3>Event - Förening - Företag - Bröllop - Produktfoto</h3>
          <br />
          <br />
          <div className="po-galleri">
            <img src={getImagePath("f3.png")} alt="" className="hover-image" />
            <img src={getImagePath("f4.png")} alt="" className="hover-image" />
            <img src={getImagePath("f5.png")} alt="" className="hover-image" />
           
            <img src={getImagePath("f2.png")} alt="" className="hover-image" />
            <img src={getImagePath("f7.png")} alt="" className="hover-image" />
            <img src={getImagePath("f6.png")} alt="" className="hover-image" />
            <img src={getImagePath("f9.png")} alt="" className="hover-image" />
            <img src={getImagePath("f10.png")} alt="" className="hover-image" />
          </div>
          <div className="b5-con">
			<Link to="/portfolio" className="btn5">
				Se mer
            </Link>
          </div>
        </div>

        <div className="f-box">
          <div className="f-cont1">
            <h3>Fototjänster</h3>
            <br />
            <p>
              Håller ni på att planera in ett event och vill anlita en eventfotograf?
              Hos oss på ARfotografering kan ni anlita en duktig eventfotograf.
              Vi ser till så att alla de viktiga momenten fångas upp och dokumenteras av oss.
            </p>
            <br />
            <div className="kn">
              <Link to="/kontakt" className="kn">Ta kontakt</Link>
            </div>
          </div>
          <br />
          <div className="f-image2">
            <img src={getImagePath("f12.png")} alt="" />
          </div>

          <div className="f-image3">
            <img src={getImagePath("f11.png")} alt="" />
          </div>
        </div>
      </div> 
    );
  }
}
export default Foretag;

