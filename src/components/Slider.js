import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { useState } from "react";
import "../fontawesome.min.css";

export default function Slider() {


  // Codes des touches clavier.

  const LEFT_ARROW_KEY = "ArrowLeft";
  const RIGHT_ARROW_KEY = "ArrowRight";


  function SliderKey(event){

switch(event.code) 
{
    case RIGHT_ARROW_KEY:
        nextSlide();
        break;

    case LEFT_ARROW_KEY:
        prevSlide();
        break;
        default:
            break;
}
  }

  document.addEventListener('keyup', SliderKey);
  

  // Création de mon tableau d'objet
  const data = [
    {
      id: 1,
      image: `https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_960_720.jpg`,
      titre: "Cravate",
    },

    {
      id: 2,
      image: `https://cdn.pixabay.com/photo/2017/04/05/01/12/traveler-2203666_960_720.jpg`,
      titre: "Pantalon",
    },

    {
      id: 3,
      image: `https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg`,
      titre: "Pull",
    },
    {
      id: 4,
      image: `/Imgs/img1.jpg`,
      titre: "Plage",
    },
    {
      id: 5,
      image: `/Imgs/img2.jpg`,
      titre: "Bateau",
    },
    {
      id: 6,
      image: `/Imgs/img3.jpg`,
      titre: "Ordinateur",
    },
    {
      id: 7,
      image: `/Imgs/img4.jpg`,
      titre: "Vélo",
    },
  ];

  // Etat du state
  const [slideIndex, setSlideIndex] = useState(1);
  const [MaVariable, setMaVariable] = useState(false);

  // function slide suivante
  
  const nextSlide = () => {
    if (MaVariable === false) {
      setMaVariable(true);
      if (slideIndex !== data.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === data.length) {
        setSlideIndex(1);
      }
      setTimeout(() => {
        setMaVariable(false);
      }, 3000);
    }
  };
  // function slide précédente

  const prevSlide = () => {
    if (MaVariable === false) {
      setMaVariable(true);
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
        setSlideIndex(data.length);
      }
      setTimeout(() => {
        setMaVariable(false);
      }, 3000);
    }
  };


  const clickDot = (slideId, id) => {
    slideId = id;
    setSlideIndex(slideId);
  };

  return (
    <div>
        
    <div className="container-slider">
        
      {data.map((slide) => {
        return (
          <div
            key={slide.id}
            className={slideIndex === slide.id ? "slide active-anim" : "slide"}
          >
            <img src={slide.image} alt={slide.titre} />
            <div className="conteneur">
              <p>{slide.titre}</p>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div>
        <ul>
          {data.map((uneSlide) => {
            return (
              <li
                onClick={() => clickDot(slideIndex, uneSlide.id)}
                key={uneSlide.id}
                className={slideIndex === uneSlide.id ? "target" : "dot"}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}
