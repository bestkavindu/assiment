import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from './Item'
import './style.css'

const List = () => {
    const [values, setValues]=useState([]);
    useEffect(()=>{
        const getValues = async () => {
            const res=await Axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=55957fcf3ba81b137f8fc01ac5a31fb5&language=en-US&page=1");
            console.log(res)
            setValues(res.data.results);
        };
        getValues();

    },[]);
  return (
    <div className='card-container'>
       {values.map(value=>{
         return(
           <Item
           title={value.title}
           img_path={value.backdrop_path}
           full_img='https://image.tmdb.org/t/p/w500'/>
           

         )
       })}
    </div>
  );
};

export default List