import './Slider.css'
import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'
import { useState } from 'react'
import '../fontawesome.min.css';




export default function Slider() {

    // Codes des touches clavier.

    const LEFT_ARROW_KEY = 'ArrowLeft';
    const RIGHT_ARROW_KEY = 'ArrowRight';



    // Création de mon tableau d'objet
    const data = [
        {
            id: 1,
            image: `https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_960_720.jpg`,
            titre: "Cravate"
        },
    
        {
            id: 2,
            image: `https://cdn.pixabay.com/photo/2017/04/05/01/12/traveler-2203666_960_720.jpg`,
            titre: "Pantalon"
        },
    
        {
            id: 3,
            image: `https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg`,
            titre: "Pull"
        },
        {
            id: 4,
            image: `/Imgs/img1.jpg`,
            titre: "Plage"
        },
        {
            id: 5,
            image: `/Imgs/img2.jpg`,
            titre: "Bateau"
        },
        {
            id: 6,
            image: `/Imgs/img3.jpg`,
            titre: "Ordinateur"
        },
        {
            id: 7,
            image: `/Imgs/img4.jpg`,
            titre: "Vélo"
        }
    ]
    

    // Etat du state
    const [slideIndex, setSlideIndex] = useState(1)
    
    

    // function slide suivante
    const nextSlide = () => {
    if (slideIndex !== data.length) {
        setSlideIndex(slideIndex + 1)
        // console.log(slideIndex)
    } else if (slideIndex === data.length) {
        setSlideIndex(1)
        console.log(slideIndex)

    }
    
    }
    

    // function slide précédente
    const prevSlide = () => {
    if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
        setSlideIndex(data.length)
    }  
    }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }


    // Function ajout de puce 

    function addDot(element, index) {
        
        let state;

        var dot;
        var dotList;
        var link;

        dotList = document.querySelector('.container-dots');

        link = document.createElement('a');
        link.setAttribute('href', '#');


        link.addEventListener('click', function(e){

            e.preventDefault();

            state.index = index;



        });

        dot = document.createElement('li');
        dot.classList.add('dot')

        dot.id = 'dot-' + index;

        dot.appendChild(link);
        dotList.appendChild(dot);

    }

    const clickDot = (slideId, id) => {
            slideId = id;
            setSlideIndex(slideId);

    }
  

    return (
        <div className='container-slider'>
            {data.map((slide) => {
            return (
                <div
                key={slide.id}
                className={slideIndex === slide.id ? "slide active-anim" : "slide" }>
                    <img src={ slide.image }
                    alt="" />
                    <div className='conteneur'>
                    <p>{slide.titre}</p>
                    </div>

                    </div>
            )
            
})}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />

    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

<div>
    <ul>
        {data.map((uneSlide) => {
           
            return (
        
            <li onClick={() =>clickDot (slideIndex, uneSlide.id)} key={uneSlide.id} className={slideIndex === uneSlide.id ? "target" : "dot" }>

            </li>

            )

        })}
    </ul>
</div>
        </div>
    )


}