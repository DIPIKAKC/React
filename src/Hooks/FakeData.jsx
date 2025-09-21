import { faker } from "@faker-js/faker/.";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { useState } from "react";

export default function FakeData() {

const [data, setData]=useState([]);

const handleData = () => {
  const newData = {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),

  };
  setData((prev) => [...data, newData]) //pachadi ko data lai store garcha previous sangai
}

const handleDelete = (id) => {
  setData((prev) => prev.filter((user) => user.userId !== id));
};


console.log(data);

  return (
    <div className="p-5 space-y-4">
      <Button onPress={handleData} className="bg-purple-700 text-white">Add Data</Button>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
        {data.map((user) => (
          <Card key={user.userId} className="max-w-sm py-4">
            <CardHeader>
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>{user.userId}</span>
            </CardHeader>
            <CardBody>{user.username}</CardBody>
            <CardFooter>{user.email}</CardFooter>
            <Button onPress={() => handleDelete(user.userId)} className="bg-red-500 text-white w-fit ml-3 px-10">Delete</Button>
          </Card>
        ))}
      </div>
      <Card className='w-fit p-4 bg-black/10 backdrop-blur justify-self-center'>
        <CardHeader className='flex flex-col items-start'>
          <h3 className='uppercase font-bold'>daily mix</h3>
          <p className='text-gray-400'>12 tracks</p>
          <h3 className='uppercase text-lg font-bold'>frontend radio</h3>
        </CardHeader>
        <CardBody>
          <img src="https://heroui.com/images/hero-card-complete.jpeg"className='w-70' alt="" />
        </CardBody>
      </Card>
    </div>
  )
}
