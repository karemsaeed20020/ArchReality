import React from 'react';
import './QRCode.css';
import QR from '../../assets/WhatsApp Image 2024-04-21 at 01.05.00_e335c383.jpg'

const QRCode = () => {
  return (
    <div className='qr-code-container'>
            <div className='qr-code text-center'>
                <img src={QR} className='qr' alt="" />
                <h1 className='text-white mt-5 mb-5'>Scan me</h1>
            </div>
        </div>
    
  )
}

export default QRCode
