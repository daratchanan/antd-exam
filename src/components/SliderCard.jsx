import React from 'react'
import {
   Typography
} from 'antd'

export default function SliderCard({ product }) {
   return (
      < div style={{ padding: '0px 8px', position: 'relative' }}>
         <img src={product.img} width='100%' />
         <Typography
            style={{
               textAlign: 'center',
               position: 'absolute',
               zIndex: 10,
               bottom: 0,
               left: '50%',
               transform: 'translate(-50%, 0%)',
               background: '#FF3300',
               color: '#FFF',
               padding: '10px',
               width: '80%',
               borderRadius: "20px"
            }}>{product.name}</Typography>
      </div>
   )
}
