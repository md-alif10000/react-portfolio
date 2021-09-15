import React, { useEffect, useState } from "react";
import PortfolioList from "../shared/PortfolioList/PortfolioList";
import "./portfolio.scss";
import {
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
htmlCss
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "featured" },
    { id: "htmlCss", title: "Html-CSS" },
    { id: "design", title: "Design" },
    { id: "mobile", title: "Mobile" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "htmlCss":
        setData(htmlCss);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
        default:
            setData(featuredPortfolio)
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            key={index}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="container">
          {data.map((item,index)=> 
          
          <div className="item"  key={index} >
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <a href={item.url}  target="_blank" >view</a>
        </div>)}
       
      
      </div>
    </div>
  );
};

export default Portfolio;
