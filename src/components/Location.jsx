import React from 'react'

const Location = () => {
    return (
        <>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.262620591831!2d77.30496827495521!3d28.591897285925757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6ae07ef43%3A0xd9f3aab4a8c5db2d!2sTIFT%20Study%20Corner!5e0!3m2!1sen!2sin!4v1717307622919!5m2!1sen!2sin"

                    style={{ border: '0', width: '100%', height: '30rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </section>
        </>
    )
}

export default Location