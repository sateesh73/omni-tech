import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const Whatsapp = () => {
  return (
    <div>
        <FloatingWhatsApp phoneNumber="+91 9109576423"
        accountName="sateesh"
        allowEsc
        allowClickAway
        notification
        notificationSound/>
    </div>
  )
}

export default Whatsapp