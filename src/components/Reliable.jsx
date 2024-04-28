import React from "react";
import { reliable } from "../data/data";
import style from "./reliable.module.css";
import { TfiReload } from "react-icons/tfi";
import { BsBricks } from "react-icons/bs";
export default function Reliable() {
  return (
    <div>
      {reliable.map((data, index) => (
        <div className={style.reliable} key={index}>
          <div>
            <h2>{data.header}</h2>
            <p>{data.text}</p>
          </div>
          <div className={style.reliableImg}>
            <img src={data.img} alt="" />
          </div>
        </div>
      ))}
      <div className={style.reliable1}>
        <div>
          <TfiReload /> <span>Fully asynchronous.</span>
          <hr />
          <p>No meetings, just results.</p>
        </div>
        <div>
          <BsBricks /> <span>Effortless management.</span>
          <hr />
          <p>Simplified design request handling via Trello.</p>
        </div>
      </div>
    </div>
  );
}
