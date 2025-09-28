import { useSelect } from '@heroui/react'
import React from 'react'
import { useSelector } from 'react-redux';

export default function HomeForm() {
    const {users}=useSelector((state)=>state.UserSlice); //state=> global user
    console.log(users) //object
    return (
        <div>

        </div>
    )
}
