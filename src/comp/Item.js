import React from 'react'
import './style.css'


const Item = ({title,full_img,img_path}) => {
  return (
    <div className='movie-card'>
        <div className='item'>
            <img className='movie-img' src={full_img+img_path} alt=""/>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Item