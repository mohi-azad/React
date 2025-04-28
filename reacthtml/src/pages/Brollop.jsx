import React from "react";
import { Link } from "react-router-dom";

class Brollop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedMonths: new Set(),
      Datelist: [
        { month: "Maj", dates: ["3/5/2025", "10/5/2025", "20/5/2025", "26/5/2025"] },
        { month: "Juni", dates: ["7/6/2025", "10/6/2025", "15/6/2025", "28/6/2025"] },
        { month: "Juli", dates: ["6/7/2025", "15/7/2025", "20/7/2025"] },
        { month: "Aug", dates: ["3/8/2025", "10/8/2025", "14/8/2025", "22/8/2025"] },
        { month: "Övrig", dates: ["3/9/2025", "8/9/2025", "20/10/2025", "26/11/2025"] },
      ],
    };
  }

  toggleMonth = (month) => {
    this.setState((prevState) => {
      const expandedMonths = new Set(prevState.expandedMonths); 
      if (expandedMonths.has(month)) {
        expandedMonths.delete(month); 
      } else {
        expandedMonths.add(month); 
      }
      return { expandedMonths };
    });
  };

  render() {
    return (
      <>
        <div className="title2">
          <div className="k-1">
            <br />
            <br />
            <div className="text-c">
              <h2>Lediga datum 2025!</h2>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="ledig-con">
          <div className="booking-info">
            <h3>Lediga tider och datum för 2025!</h3>
            <br />
            <ul className="m-lista">
              {this.state.Datelist.map((item) => (
                <li className="m-item" key={item.month}>
                  <span onClick={() => this.toggleMonth(item.month)}>
                    {item.month}
                    <ion-icon
                      className="expand-icon"
                      name={this.state.expandedMonths.has(item.month) ? "remove-outline" : "add-outline"}
                    ></ion-icon>
                  </span>
                  <div className="m-detaljer" style={{ display: this.state.expandedMonths.has(item.month) ? "block" : "none" }}>
                    <ul>
                      {item.dates.map((date) => (
                        <li key={date}>{date}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <br />
            <Link to="/kontakt" className="btn">Ta kontakt</Link>
          </div>
          <div className="booking-image1">
            <img src="pic/l1.png" className="hover-image" alt="" />
          </div>
          <br />
        </div>
      </>
    );
  }
}
export default Brollop;