import { Avatar, Listbox, ListboxItem } from '@heroui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

export default function MealList() {

    const {name}=useParams();

    const[data, setData]=useState([]); //initial state, rerender=> app comp feri chalnu ho
    const nav=useNavigate();

    const getData = async() =>{
        try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
            params:{c:name}
        });
        // console.log(response.data)
        setData(response.data.meals);
        // console.log(cat);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => { //dom mount bhayesi matra chalcha
        getData();
    }, [name])

    console.log(data)

    return (
        <div>
            {data && 
                <Listbox
                    className=''
                    defaultSelectedKeys={["1"]}
                    items={data}
                    label="Assigned to"
                >
                    {(item) => (
                    <ListboxItem
                    onClick={()=>{nav(`/category/meal/${item.idMeal}`)}}
                    key={item.idMeal} textValue={item.strMeal} className=''>
                        <div className="flex gap-2 items-center h-25 w-100 rounded-2xl w- px-4 bg-gray-200">
                        <Avatar alt={item.strMeal} className="shrink-0 size-20" src={item.strMealThumb} />
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">{item.strMeal}</span>
                        </div>
                        </div>
                    </ListboxItem>
                    )}
                </Listbox>
            }
        </div>
    )
}
