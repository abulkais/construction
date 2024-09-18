import React, { useRef, useEffect } from 'react'

const LuxuryPackages = () => {

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
                    <h3>LuxuryPackages</h3>
                    <p>Find the best Luxury Packages.*</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="accordion" id="luxurypackages" useRef={accordionRef}>

                                <div className='accordion_div'>
                                    <h4>Freesia Package - ₹3,725/sq.ft (Incl. GST)</h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseOne1" aria-expanded="true" aria-controls="luxurycollapseOne1">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#luxurypackages">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseOne2" aria-expanded="false" aria-controls="luxurycollapseOne2">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseOne2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#luxurypackages">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseOne3" aria-expanded="false" aria-controls="luxurycollapseOne3">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseOne3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#luxurypackages">
                                        <div class="accordion-body">
                                            <ul ><li >Ceramic Wall Dado - Upto Rs.40 per Sqft</li><li >Main Sink Faucet - Upto Rs.1300</li><li >Any other Faucet or Accessories - ISI Marked</li><li >Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="accordion" id="luxurypackages2">

                                <div className='accordion_div'>
                                    <h4>Dahlia Package - ₹4,990/sq.ft  </h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseTwo1" aria-expanded="true" aria-controls="luxurycollapseTwo1">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseTwo1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#luxurypackages2">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseTwo2" aria-expanded="false" aria-controls="luxurycollapseTwo2">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#luxurypackages2">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxurycollapseTwo3" aria-expanded="false" aria-controls="luxurycollapseTwo3">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="luxurycollapseTwo3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#luxurypackages2">
                                        <div class="accordion-body">
                                            <ul ><li >Ceramic Wall Dado - Upto Rs.40 per Sqft</li><li >Main Sink Faucet - Upto Rs.1300</li><li >Any other Faucet or Accessories - ISI Marked</li><li >Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="accordion" id="luxurypackages3">

                                <div className='accordion_div'>
                                    <h4>Magnolia Package - ₹6,160/sq.ft   </h4>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne3">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#luxuryluxurycollapseOne31" aria-expanded="true" aria-controls="collapseOne">
                                            Designs & Drawings
                                        </button>
                                    </h2>
                                    <div id="luxuryluxurycollapseOne31" class="accordion-collapse collapse show" aria-labelledby="headingOne3" data-bs-parent="#luxurypackages3">
                                        <div class="accordion-body">
                                            <ul><li>Architectural Layout | 2D</li><li>Basic Elevation</li><li>Structural Design</li><li>3D Elevation</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxuryluxurycollapseTwo3" aria-expanded="false" aria-controls="collapseTwo">
                                            Structure
                                        </button>
                                    </h2>
                                    <div id="luxuryluxurycollapseTwo3" class="accordion-collapse collapse" aria-labelledby="headingTwo3" data-bs-parent="#luxurypackages3">
                                        <div class="accordion-body">
                                            <ul ><li >Steel - Rathi or Kamadhenu or equivalent</li><li >Cement - Ambuja or Dalmia or Shree or equivalent of 43 or 53 grade</li><li >Aggregates - 20mm &amp; 40mm</li><li >Blocks - Standard Solid Concrete blocks. 6 inch &amp; 4 inch
                                            </li><li >RCC Design Mix - M25 or As per the structural designer recommendation</li><li >Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#luxuryluxurycollapseOne33" aria-expanded="false" aria-controls="luxuryluxurycollapseOne33">
                                            Kitchen
                                        </button>
                                    </h2>
                                    <div id="luxuryluxurycollapseOne33" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#luxurypackages3">
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

export default LuxuryPackages