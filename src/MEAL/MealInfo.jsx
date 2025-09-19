import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function MealInfo() {

    const {id}=useParams();
    const[load,setLoad]=useState(false);
    const[err,setErr]=useState(false);

    const[data, setData]=useState([]); //initial state, rerender=> app comp feri chalnu ho

    const getData = async() =>{
        setLoad(true);
        try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php',{
            params:{i:id}
        });
        // console.log(response.data)
        setLoad(false)
        setData(response.data.meals);
        // console.log(cat);
        } catch (error) {
            setLoad(false )
        console.log(error);
        }
    }

    useEffect(() => { //dom mount bhayesi matra chalcha
        getData();
    }, [])

    console.log(data)

    return (
        <div>
        {data && data.meals.map((meal)=>{
            const youtubeKey=meal.strYoutube.split('=')[1];
            return <div key={meal.idMeal}>
                <h1>{meal.strMeal}</h1>

                <div className='flex'>
                    <p>{meal.strArea}</p>
                    <p>{meal.strCategory}</p>
                </div>

                <div>
                    <img src={meal.strMealThumb} alt="" />
                    <iframe src={`https://www.youtube.com/embed/${youtubeKey}`} frameborder="0"></iframe>
                </div>

                <div className='flex'>
                    <div>
                        <h1>Ingredients</h1>
                        {Object.keys(meal).map((mealKey)=>{
                            if(mealKey.includes('strIngredient')){
                                return <p>{meal[mealKey]}</p>
                            }
                        })}
                    </div>
                    <div>
                        <h1>Measures</h1>
                        {Object.keys(meal).map((mealKey)=>{
                            if(mealKey.includes('strMeasure')){
                                return <p>{meal[mealKey]}</p>
                            }
                        })}
                    </div>
                </div>

                <p>{meal.strInstructions}</p>
                <h1>Source: <a href={meal.strSource} target='_blank'>Visit the source </a></h1>
            </div>
        })}
        </div>
    )
}
