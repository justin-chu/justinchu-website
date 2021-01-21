import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Projects"
import { MdSortByAlpha, MdDateRange } from "react-icons/md";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration: 2000, offset: 0});
  }, [])

  const [sortDate, setSortDate] = useState(2) // 0 = off, 1 = ascending, 2 = descending
  const [sortAlphabet, setSortAlphabet] = useState(0) // 0 = off, 1 = ascending, 2 = descending

  const handleDate = () => {
    setSortAlphabet(0)
    setSortDate(sortDate == 2 ? 1 : 2)
  }

  const handleAlphabet = () => {
    setSortDate(0)
    setSortAlphabet(sortAlphabet == 2 ? 1 : 2)
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{width: "100%", maxWidth: 1280, padding: 60}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1 className="sub-header" style={{marginTop: 0, marginBottom: 20}}>Portfolio</h1>
          <div>
            <button className="date-button" onClick={() => handleDate()}>
              <MdDateRange color="black" size="20px" style={{marginTop: 3}} />
            </button>
            <button className="letter-button" onClick={() => handleAlphabet()}>
              <MdSortByAlpha color="black" size="20px" style={{marginTop: 3}} />
            </button>
          </div>
        </div>
        {Projects.map((item, index) => {
          return (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}
            >
              <div className="project" data-aos="fade">
                <img src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" className="project-image" />
                <div>
                  <h2 style={{fontSize: 22, marginTop: -2, fontWeight: 600}}>{item.title}</h2>
                  <p style={{marginTop: -12}}>{item.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  )
}

export default Portfolio;