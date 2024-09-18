import React, { useState } from 'react';
import '../css/CardsSlider.css'; // External CSS for styling

const CardsSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image:
                'https://images.unsplash.com/photo-1604503245604-930a6f3513ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            title: 'Greece, Santorini',
        },
        {
            image:
                'https://images.unsplash.com/photo-1542021837673-16634fbd380f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Brasil',
        },
        {
            image:
                'https://images.unsplash.com/photo-1609959155450-6957a2398005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80',
            title: 'UAE, Dubai',
        },
        {
            image:
                'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80',
            title: 'Philippines, Palawan',
        },
        {
            image:
                'https://images.unsplash.com/photo-1614505241498-80a3ec936595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80',
            title: 'Maldives',
        },
        {
            image:
                'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'France, Paris',
        },
        {
            image:
                'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
            title: 'Mexico, Cancun',
        },
    ];

    const handleSlideClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="cardSliderContainer">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`cardSlider ${index === activeSlide ? 'cardsactive' : ''}`}
                                style={{ backgroundImage: `url(${slide.image})` }}
                                onClick={() => handleSlideClick(index)}
                            >
                                <h3>{slide.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardsSlider;
