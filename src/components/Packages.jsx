import React, { useRef, useEffect } from 'react'

const Packages = () => {

    const accordionRef = useRef(null);

    useEffect(() => {
        const accordionElement = accordionRef.current;
        if (accordionElement) {
            // Perform any DOM manipulation if necessary
            // For example, adding a class
            accordionElement.classList.add('custom-class');
        }
    }, []);





    return (
        <>

            <section className='packages_section'>
                <div className="container">
                    <h3>Packages</h3>
                    <p>Find the best home construction packages.*</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="accordion" id="accordionExample" useRef={accordionRef}>

                                <div className='accordion_div'>
                                    <h4>Basic Package - ₹1,790/sq.ft </h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul ><li >Ceramic Wall Dado - Upto Rs.40 per Sqft</li><li >Main Sink Faucet - Upto Rs.1300</li><li >Any other Faucet or Accessories - ISI Marked</li><li >Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="accordion" id="accordionExample2">

                                <div className='accordion_div'>
                                    <h4>Classic Package - ₹2,070/sq.ft  </h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample2">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample2">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="collapseThree2" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample2">
                                        <div class="accordion-body">
                                            <ul ><li >Ceramic Wall Dado - Upto Rs.40 per Sqft</li><li >Main Sink Faucet - Upto Rs.1300</li><li >Any other Faucet or Accessories - ISI Marked</li><li >Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="accordion" id="accordionExample3">

                                <div className='accordion_div'>
                                    <h4>Premium Package - ₹2,330/sq.ft  </h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne3">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="collapseOne3" class="accordion-collapse collapse show" aria-labelledby="headingOne3" data-bs-parent="#accordionExample3">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="collapseTwo3" class="accordion-collapse collapse" aria-labelledby="headingTwo3" data-bs-parent="#accordionExample3">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample3">
                                        <div class="accordion-body">
                                            <ul ><li >Ceramic Wall Dado - Upto Rs.40 per Sqft</li><li >Main Sink Faucet - Upto Rs.1300</li><li >Any other Faucet or Accessories - ISI Marked</li><li >Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages


// import React, { useRef, useEffect, useState } from 'react';
// import packagesData from './PackagesData.json'; // Adjust the path as needed

// const Packages = () => {
//     const accordionRef = useRef(null);
//     const [location, setLocation] = useState('Noida');
//     const [packages, setPackages] = useState([]);

//     useEffect(() => {
//         const accordionElement = accordionRef.current;
//         if (accordionElement) {
//             // Perform any DOM manipulation if necessary
//             // For example, adding a class
//             accordionElement.classList.add('custom-class');
//         }

//         // Set the packages based on the initial location
//         setPackages(packagesData[location]);
//     }, []);

//     const handleLocationChange = (newLocation) => {
//         setLocation(newLocation);
//         setPackages(packagesData[newLocation]);
//     };

//     return (
//         <>
//             <section className='packages_section'>
//                 <div className="container">
//                     <h3>Packages</h3>
//                     <p>Find the best home construction packages.*</p>
//                     <div className="dropdown mb-3">
//                         <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//                             {location}
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                             <li><button className="dropdown-item" onClick={() => handleLocationChange('Noida')}>Noida</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleLocationChange('Delhi')}>Delhi</button></li>
//                         </ul>
//                     </div>
//                     <div className="row">
//                         {packages.map((pkg, index) => (
//                             <div className="col-lg-4 mb-4" key={index}>
//                                 <div className="accordion" id={`accordion${index}`} ref={accordionRef}>
//                                     <div className='accordion_div'>
//                                         <h4>{pkg.name} - {pkg.price}</h4>
//                                     </div>
//                                     {pkg.features.map((feature, idx) => (
//                                         <div className="accordion-item" key={idx}>
//                                             <h2 className="accordion-header" id={`heading${index}${idx}`}>
//                                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}${idx}`} aria-expanded={idx === 0 ? "true" : "false"} aria-controls={`collapse${index}${idx}`}>
//                                                     {pkg.mainheading}
//                                                 </button>
//                                             </h2>
//                                             <div id={`collapse${index}${idx}`} className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`} aria-labelledby={`heading${index}${idx}`} data-bs-parent={`#accordion${index}`}>
//                                                 <div className="accordion-body">
//                                                     <ul className="list-group">
//                                                         {pkg.features.map((item, itemIndex) => (
//                                                             <li key={itemIndex}>{item}</li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Packages;
