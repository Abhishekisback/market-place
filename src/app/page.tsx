"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./styles.css";
import "./reactSlick.css";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
  
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const list = [
    {
      id: "1",
      txt: "Advanced Analytics Insights",
      url: "https://res.cloudinary.com/dxzixgrne/image/upload/v1701701122/designLayoutGridIcon_x7tu5f.svg",
    },
    {
      id: "2",
      txt: "AI Based Quotes",
      url: "https://res.cloudinary.com/dxzixgrne/image/upload/v1701701270/Group_1_zjlejd.svg",
    },
    {
      id: "3",
      txt: "Highly Secured Platform",
      url: "https://res.cloudinary.com/dxzixgrne/image/upload/v1701701270/Vector_tsuyyt.svg",
    },
    {
      id: "4",
      txt: "Customizable Solutions",
      url: "https://res.cloudinary.com/dxzixgrne/image/upload/v1701701269/carbon_security_yaghcw.svg",
    },
  ];
  const data = [
    {
      imgUrl:
        "https://res.cloudinary.com/dxzixgrne/image/upload/v1702371027/Frame_31_2_keu7yp.png",
      quote: "Chemical",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dxzixgrne/image/upload/v1702371027/Frame_31_3_pyhevf.png",
      quote: "Paints",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dxzixgrne/image/upload/v1702357716/Frame_31_h2y4ja.png",
      quote: "Lube Oil",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dxzixgrne/image/upload/v1702371027/Frame_31_4_wuiwfb.png",
      quote: "Mooring Ropes",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dxzixgrne/image/upload/v1702371027/Frame_31_5_shq3cm.png",
      quote: "Provisions",
    },
  ];
  return (
    
    <div style={{width:"100vw"
    ,height:"fit-content",backgroundColor:"orange"}}>
      <div className="wrapper">
      <Slider {...settings}>
        {list.map((ele, i) => {
          return (
            <div key={i}>
              <Image src={ele.url}
              className="Img"
              width={54} height={54} alt="feat-img" />
              <div className="text-wrapper">
                <p className="text" >{ele.txt}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="wrapper2">
      <Slider {...settings2}>
        {data.map((ele, i) => {
          return (
            <div key={i}>
              <Image src={ele.imgUrl}
              className="Img2"
              width={200} height={120} alt="feat-img" />
              <div className="text-wrapper2">
                <p className="text2" >{ele.quote}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    </div>
  );
}
