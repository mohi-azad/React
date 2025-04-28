import React from "react"; 

class Kontakt extends React.Component {
  render() {
    return (
      <>
        <div className="title2">
          <div className="k-1">
            <br />
            <br />
            <div className="text-c">
              <h2>Kontakt</h2>
              <p>
                Att skapa en genuin kontakt med er är min högsta prioritet. Det
                underlättar för oss alla att känna oss bekväma.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="k-box">
          <div className="k_content1">
            <h3>Ta kontakt</h3>
            <br />
            <p>
              Läs igenom innan du fyller i formuläret: Kommunikation är allt.
              Det är nyckeln till en fantastisk upplevelse och undviker
              missförstånd. <br />
              <br />
              Jag svarar oftast inom några timmar, inte dagar. Vi ordnar ett
              personligt möte, videosamtal eller telefonsamtal. Var beredd på
              anpassning och ärlighet. Mina offerter är skräddarsydda efter era
              behov!
            </p>
          </div>
          <div className="k-image1">
            <img src="pic/k0.png" alt="" />
          </div>
        </div>
        <div className="k-box2">
          <div className="form-container">
            <h3>Offerförfrågan</h3>
            <p>
              Fyll i formuläret så kontaktar jag dig med ett prisförslag inom
              kort.
            </p>
            <form action="#" method="post">
              <label htmlFor="name">Namn & Efternamn</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="email">E-post</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="service">Välj tjänst</label>
              <select id="service" name="service">
                <option value="fotografering">Fotografering</option>
                <option value="videografi">Videografi</option>
                <option value="paket">Foto + Video</option>
              </select>
              <label htmlFor="date">Plats & datum</label>
              <input type="text" id="date" name="date" required />
              <label htmlFor="message">
                Låt mig veta mer om dina planer!
              </label>
              <textarea id="message" name="message" rows="4"></textarea>
              <button type="submit">Skicka formuläret</button>
            </form>
          </div>
          <div className="k-image2">
            <img src="pic/k1.png" alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default Kontakt;
