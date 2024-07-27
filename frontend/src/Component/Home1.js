import React, { useEffect } from 'react';
import Navigation1 from "./Navigation1";
import '../Assets/Styles/Home1.css';
import HomeImage1 from '../Assets/Images/home-design-img1.png';
import HomeOverlapImage1 from '../Assets/Images/home-img-overlap-1.png';
import Section1Img1 from '../Assets/Images/home-section1-img1.png';
import Slider from './Slider';

const cardData = [
    { id: 1, title: 'Card Title 1', description: 'Card description goes here. This section provides more information about the topic of the card.' },
    { id: 2, title: 'Card Title 2', description: 'Another card description goes here. This section provides more information about another topic.' },
    { id: 3, title: 'Card Title 3', description: 'Yet another card description goes here. This section provides more information about yet another topic.' },
    { id: 4, title: 'Card Title 4', description: 'Additional card description goes here. This section provides more information about an additional topic.' },
    { id: 5, title: 'Card Title 5', description: 'More card description goes here. This section provides more information about more topics.' },
    { id: 6, title: 'Card Title 6', description: 'The last card description goes here. This section provides more information about the last topic.' }
];

function Home1() {
    useEffect(() => {
        const section1 = document.getElementById('section1');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section1.classList.add('in-view');
                } else {
                    section1.classList.remove('in-view');
                }
            });
        });

        observer.observe(section1);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home1">
            <Navigation1 />
            <div className="home-parent-container">
                <div className="home-container">
                    <div className="image-wrapper-1">
                        <img src={HomeOverlapImage1} alt="homeimg-overlap1" className="overlap-img" />
                        <img src={HomeImage1} alt="homeimg1" className="main-img" />
                    </div>
                    <div className="home-text-container">
                        <h1 className="home-text">Let's Crack the Interview</h1>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1721904883">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="home-section-container" id="section1">
             <div className="section1-whole1-container">
                <div className="section1-child1" id='sect1-child1'>
                    <h1>Course</h1>
                    <p>Our courses are designed to help you get the job you want. We have a wide range of courses to choose from, so you can find the perfect one for you.</p>
                </div>
                <div className="section1-child2">
                    <img src={Section1Img1} alt='sect1-img' />
                </div>
             </div>
             </div>

            <div className="home-section-container" id="section2">
                <div className='section2-child1'>
                {cardData.map((card, index) => (
                    <div className={`home-card1 card-color-${index % 6}`} key={card.id}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
              </div>
            </div>

            <div className="home-section-container" id ="section4">
               
           </div>


            <div className="home-section-container" id ="section3">
                <div className="slider-section3">
                   <div className='section3-child1'>
                       <h1>Voices of Satisfaction</h1>
                       <p><i>“Hear directly from our delighted customers about their experiences. </i>
                        Your satisfaction fuels our passion and drives us forward!”</p>
                    </div>
                    <div className='section3-child2'>
                       <Slider/>
                    </div>
                </div>
           </div>

        </div>
    );
}

export default Home1;
