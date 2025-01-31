/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import "../../scss/form/select.scss";

import AltArrowDownBold from "../../assets/solar-alt-arrow-down-bold.svg";

export default function Select({ selected, options, onChange }) {
  const selectedRef = useRef();
  const locationOptionsRef = useRef();

  const locationOptions = options.map((option, index) => (
    <div key={index} className="option">
      <input type="radio" name="location" id={`location-${option}`} value={option} onChange={() => onChange(option)} />
      <label htmlFor={`location-${option}`}>{option}</label>
    </div>
  ));

  useEffect(() => {
    const hide = (e) => !selectedRef.current.contains(e.target) && locationOptionsRef.current.classList.remove("show");
    window.addEventListener("click", hide);
    return () => window.removeEventListener("click", hide);
  }, []);

  return (
    <div className="select">
      <button ref={selectedRef} className="selected" type="button" onClick={() => locationOptionsRef.current.classList.toggle("show")}>
        <span>{selected}</span>
        <img src={AltArrowDownBold} alt="" />
      </button>
      <div ref={locationOptionsRef} className="options">
        {locationOptions}
      </div>
    </div>
  );
}
