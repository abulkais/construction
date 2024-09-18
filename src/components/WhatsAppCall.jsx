import React from 'react'
import {Link} from 'react-router-dom';

const WhatsAppCall = () => {
    return (
        <>
            <Link to='/contact' class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
                <i  style={{color:'#fff', textDecoration:'none'}} class="fa fa-question"></i>
            </Link>

            <Link to="https://api.whatsapp.com/send?phone=8271057255&text=Hi" target='_blank' class="btn-whatsapp-pulse">
                <i class="fa fa-whatsapp"></i>
            </Link>
        </>
    )
}

export default WhatsAppCall