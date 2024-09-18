import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/gallery.css'
import CommonContactForm from './CommonContactForm';
const GalleryImages = () => {

    const [activeTab, setActiveTab] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        { id: 1, category: 'Residential', src: 'https://images.adsttc.com/media/images/61ba/3257/f91c/8109/a400/0001/newsletter/2.Nic_Lehoux.jpg', alt: 'Residential' },
        { id: 2, category: 'Residential', src: 'https://images.adsttc.com/media/images/61ba/328b/f91c/8109/a400/0003/newsletter/6._Ishita_Sitwala_The_Fishy_Project.jpg', alt: 'Residential' },
        { id: 3, category: 'Commercial', src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/16/full/1692177686-6458.jpg', alt: 'Commercial project' },
        { id: 4, category: 'Commercial', src: 'https://www.birlaproject.com/projects-in-bengaluru/birla-commercial-shettigere/images/birla-commercial-shettigere-banner.jpg', alt: 'Commercial' },
        { id: 5, category: 'Residential', src: 'https://images.adsttc.com/media/images/61ba/351f/f91c/8104/7600/0029/newsletter/11.Karl_Beath.jpg', alt: 'Residential' },
        { id: 6, category: 'Commercial', src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDu9XJSAzxumalqZQY9CXX60JJQEOAK0cXfHjsrNoaYwGutBaDs1SK3CfDMFGgTMnY9q9ukPvRe1oFgzjEs8pAL0nqHr6_vTEdIfXQ2BbYIiSyWPHorgSewo40xRVRQzk_Xsy3L9Yy7MIV/s16000-rw/top+commercial+project+.jpg', alt: 'Commercial' },
        { id: 7, category: 'Ongoing', src: 'https://www.adviilaw.com.au/wp-content/uploads/2021/05/shutterstock_1075801214-1024x682-1-768x512.jpg', alt: 'On Going roject' },
        { id: 8, category: 'Complete', src: 'https://www.dynaconprojects.com/photos/organic1/2.jpg', alt: 'Commercial' },
        { id: 9, category: 'Ongoing', src: 'https://4.imimg.com/data4/ED/IT/MY-2687615/residential-commercial-construction-500x500.jpg', alt: 'On Going roject' },
        { id: 10, category: 'Ongoing', src: 'https://www.cicconstruction.com/blog/content/uploads/2023/05/the-top-important-differences-between-commercial-and-residential-construction.jpg', alt: 'On Going roject' },
        { id: 11, category: 'Ongoing', src: 'https://img.freepik.com/premium-photo/new-residential-house-contemporary-style-building-progress-construction-site_293060-4470.jpg', alt: 'On Going roject' },
        { id: 12, category: 'Complete', src: 'https://www.dynaconprojects.com/photos/organic/1.jpg', alt: 'Complete project' },
        { id: 13, category: 'Complete', src: 'https://www.dynaconprojects.com/photos/swimmingpool/2.jpg', alt: 'Complete project' },
        { id: 14, category: 'Complete', src: 'https://www.dynaconprojects.com/photos/image8.jpg', alt: 'Complete project' },
        { id: 15, category: 'Commercial', src: 'https://www.signatureglobal.in/images/projects/list/projects_dxp_luxury.jpg', alt: 'Commercial' },
        { id: 16, category: 'Residential', src: 'https://www.repl.global/wp-content/uploads/2016/03/Omaxe-residency.jpg', alt: 'Residential' },


    ];


    const filteredImages = activeTab === 'All' ? images : images.filter(image => image.category === activeTab);



    return (
        <>



            <section className='galler_img_sec'>
                <div className="container">
                    <p>Our Projects
                    </p>
                    <h2>We Build Everything You Dream
                    </h2>


                    <div className="text-center mb-4">
                        <button className={`btn ${activeTab === 'All' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('All')}>All Project</button>
                        <button className={`btn ${activeTab === 'Residential' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('Residential')}>Residential project</button>
                        <button className={`btn ${activeTab === 'Commercial' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('Commercial')}>Commercial Project</button>
                        <button className={`btn ${activeTab === 'Ongoing' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('Ongoing')}>On Going Project</button>
                        <button className={`btn ${activeTab === 'Complete' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('Complete')}>Complete Project</button>

                    </div>


                    <div className="row">
                        {filteredImages.map(image => (
                            <div key={image.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedImage(image)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#imageModal"
                                />
                            </div>
                        ))}
                    </div>


                </div>
            </section>


            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="imageModalLabel">{selectedImage?.alt}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img data-src={selectedImage?.src} src={selectedImage?.src} alt={selectedImage?.alt} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GalleryImages