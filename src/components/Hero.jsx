import React from "react";
import style from "./hero.module.css";
import { heroData, innerHero } from "../data/data";

export default function Hero() {
  return (
    <>
      {heroData.map((data, index) => (
        <div className={style.Hero} key={index}>
          <div className={style.HeroContent}>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button>see plans</button>
          </div>
          <div className={style.HeroImg}>
            <img src={data.img} alt="" />
          </div>
        </div>
      ))}

      {innerHero.map((data, index) => (
        <div className={style.innerheroflex} key={index}>
          <div className={style.innerhero}>
            <p>{data.text}</p>
          </div>
          <div className={style.innerhero}>
            <p>{data.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
}
