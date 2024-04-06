import React from "react";
import style from "./hero.module.css";
import { heroData } from "../data/data";

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

      <div className={style.innerheroflex}>
        <div className={style.innerhero}>
          <p>
            We specialize in user-centric design, enhancing mobile and web apps
            with elegant interfaces and responsive layouts.
          </p>
        </div>
        <div className={style.innerhero}>
          <p>
            We craft seamless design systems for scalable success and provide
            strategic consulting for increased conversions.
          </p>
        </div>
      </div>
    </>
  );
}
