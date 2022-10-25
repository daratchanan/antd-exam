import React from 'react'
import { Typography } from 'antd'

export default function TopCard({ card }) {
   return (
      <div 
      style={{
         border: '1px solid black',
         borderRadius: '10px',
         padding: '10px'
      }}
      >
         <img
            src={card.img}
            alt={card.name}
            width='100%'
         />
         <Typography.Title level={3}>{card.categories.toUpperCase()}</Typography.Title>
         <Typography.Text>{card.qty} items</Typography.Text>
      </div>
   )
};
