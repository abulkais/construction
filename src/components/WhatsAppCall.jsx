import React from 'react'
import '../css/whatsappCall.css'
const WhatsAppCall = () => {
    return (
        <>


            <div className="whatsapp_img">
                <a href="https://wa.me/9717224326" target="_blank" title="WhatsApp Us">
                    <img src="https://www.deejos.com/images/whatsapp.svg" class="img-responsive" alt="WhatsApp" loading="lazy" />
                </a>
            </div>
            <div className="call_img">
                <a href="tel:+9717224326" title="Call Us">
                    <img src="https://www.deejos.com/images/call.png" class="img-responsive" alt="Call Us" loading="lazy" />
                </a>
            </div>
        </>
    )
}

export default WhatsAppCall