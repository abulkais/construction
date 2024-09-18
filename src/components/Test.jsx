import React, { useRef } from 'react';
import '..css/test.css'; // Create a separate CSS file for the styles

const Test = () => {
  const sliderRef = useRef(null);

  const handleNavigation = (e) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll('.slider_item');
    if (e.target.classList.contains('next')) {
      slider.appendChild(items[0]);
    } else if (e.target.classList.contains('prev')) {
      slider.insertBefore(items[items.length - 1], items[0]);
    }
  };

  return (
    <section className="banner_m_slider">
      <div className="banner_inner_s">
        <ul className="slider" ref={sliderRef}>
          <li
            className="slider_item"
            style={{
              backgroundImage:
                "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="slider_item"
            style={{
              backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="slider_item"
            style={{
              backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="slider_item"
            style={{
              backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="slider_item"
            style={{
              backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="slider_item"
            style={{
              backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')"
            }}
          >
            <div className="slider_content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <div className="slider_nav">
          <span className="btn prev" onClick={handleNavigation}>
            &lt;&lt;
          </span>
          <span className="btn next" onClick={handleNavigation}>
            &gt;&gt;
          </span>
        </div>
      </div>
    </section>
  );
};

export default Test;
