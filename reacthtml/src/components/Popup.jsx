import React from "react";


const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
		<img src="/pic/hello.png" alt="Hello" />
		<h1>Hello, JavaScript!</h1>
		<p>Click the button below to go back.</p>
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
};
export default Popup;


