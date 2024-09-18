import React from 'react'
import GalleryImages from './GalleryImages'
import { Link } from 'react-router-dom'
import CommonContactForm from './CommonContactForm'
const Gallery = () => {
    return (
        <>

            <section className="gallery_sec">
                <div className='gallery_sec_banner'>
                    <div className="container">
                        <h1>Project Gallery</h1>
                        <p><Link href="/"> <i class="fa fa-home"></i> Home  </Link> / <a>Gallery</a></p>
                    </div>
                </div>
            </section>
            <GalleryImages />

            <CommonContactForm />
        </>
    )
}

export default Gallery