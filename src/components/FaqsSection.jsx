import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FaqsSection = () => {
  return (
    <section className='faqs_section'>
      <div className="container">
        <h3 >Faqs</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqscollapseOne" aria-expanded="true" aria-controls="faqscollapseOne">
                Does Brick&Bolt businesses charge an advance payment?
              </button>
            </h2>
            <div id="faqscollapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes. Brick&Bolt collects a booking amount of about 2% of the total home construction cost. Alongside this, we conduct digital surveys, perform soil tests, and create a floor plan.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqscollapseTwo" aria-expanded="false" aria-controls="faqscollapseTwo">
                What is the estimated time it will take to build a full house?
              </button>
            </h2>
            <div id="faqscollapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                It takes 6 to 14 months to complete a house construction project. Generally, a 5-month period to build the first floor and 1.5 months for each one after that is the standard. However, this depends on the space, built-up area, locations, design, construction type (foundation or core), etc. You can track your project, including updates, inspection reports, payment schedules, etc., on the customer app.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqscollapseThree" aria-expanded="false" aria-controls="faqscollapseThree">
                Do I have to pay the full amount before the project starts?
              </button>
            </h2>
            <div id="faqscollapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                No. You will have to pay different amounts based on the personalised payment schedule curated based on the construction stages of your project. We charge a 2% booking amount. 8% of the total amount is collected once the floor plan is finalised. Our construction company then moves forward with structural drawings, MEP drawings, 3D elevation drawings, and the initiation of contractor allocation.
                After the completion of the design phase, the finalised product is handed over to the project management team. This is where you have to pay 15% of the project value until the plinth is constructed. From here on, the remaining payment will be based on stages specific to the project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqsSection;
