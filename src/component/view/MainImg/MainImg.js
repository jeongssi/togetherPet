import React from 'react';
import { Image } from 'antd';

const MainImg = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <Image 
      src={`${process.env.PUBLIC_URL}/img/pet1.jpg`}
      preview={false}
    />
    </div>
  )
}

export default MainImg
