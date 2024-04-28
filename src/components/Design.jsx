import React from "react";
import style from "./design.module.css";
import { design } from "../data/data";

export default function Design() {
  return (
    <div>
      {design.map((data, index) => (
        <div className={style.designflex} key={index}>
          <div className={style.designImg}>
            <img src={data.img} alt="" />
          </div>
          <div>
            <h2>{data.header}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
      <div className={style.streamline}>
        <h1>Streamlined & effortless.</h1>
      </div>
    </div>
  );
}
