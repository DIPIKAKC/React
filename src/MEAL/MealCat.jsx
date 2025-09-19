import { Card, CardHeader } from '@heroui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function MealCat() {

    const[data, setData]=useState([]); //initial state, rerender=> app comp feri chalnu ho
    const nav=useNavigate();

    const getData = async() =>{
        try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        // console.log(response.data)
        setData(response.data);
        // console.log(cat);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => { //dom mount bhayesi matra chalcha
        getData();
    }, [])

    console.log(data)


    return (
        <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {data && data?.categories?.map((c)=>{
                return <Card
                isPressable 
                onPress={() => nav(`/meal/category-items/${c.strCategory}`)}
                className="w-80 py-6 px-3 cursor-pointer" key={c.idCategory}>
                <CardHeader className='font-bold text-xl uppercase'>{c.strCategory}</CardHeader>
                <img src={c.strCategoryThumb} className='w-fit' alt="" />
                {/* <p className="line-clamp-3">{c.strCategoryDescription}</p> */}
                </Card>
            })}        
        </div>
    )
}
