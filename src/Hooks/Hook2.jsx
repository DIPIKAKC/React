import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import { ClockFading } from 'lucide-react';
import React, { useState } from 'react'

export default function Hook2() {

const [data, setData] = useState([]);
const [isHello, setIsHello] = useState(true);
const [text, setText] = useState("");

const [color, setColor] = useState("red");
const [customColor, setCustomColor] = useState("");

const handleAdd = () => {
    const fakeData ={
        username: faker.internet.username(),
        email: faker.internet.email(),
        
    }
    setData(fakeData);
}

const handleToggle = () => {
    setIsHello(!isHello); 
};

const handleChange = (e) => {
    setText(e.target.value);
};

const handleClear = () => {
    setText("");
};

  return (
    <div>
       <div>
            <img src={data.avatar} alt="" />
            <h2>{data.username}</h2>
            <p>{data.email}</p>
            <Button onClick={handleAdd}>Click</Button>
       </div>

       <div>
            <h1>
                {isHello ? "Hello World" : "Goodbye World"}
            </h1>

            <Button onClick={handleToggle}>
                {isHello ? "Show Goodbye" : "Show Hello"}
            </Button>
        </div>

        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <Button onClick={handleClear}>
                Clear
            </Button>

            <p>
                {text ? text : "Input is empty"}
            </p>            
        </div>


      {/* Color Box */}
      <div
        className="w-32 h-32 rounded mb-4 border"
        style={{ backgroundColor: color }}
      ></div>

      {/* Buttons */}
      <div className="space-x-2 mb-4">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Blue
        </button>
      </div>

      {/* Custom Color Input */}
      <input
        type="text"
        placeholder="Enter a color (e.g. purple, #fff)"
        value={customColor}
        onChange={(e) => setCustomColor(e.target.value)}
        className="border px-2 py-1 rounded mr-2"
      />
      <button
        onClick={() => setColor(customColor)}
        className="bg-gray-600 text-white px-3 py-1 rounded"
      >
        Apply
      </button>

    </div>
  )
}
