import React from 'react'

export const Array = () => {

    const person= ['ram','hari','sita','gita']

    const persons = [
        {id:1, name: 'ram', age:20},
        {id:2, name: 'shyam', age:30},
        {id:1, name: 'rita', age:50},
    ];

    const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
    ];

     const comments = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
  ];

    const people = [
        { id: 1, name: 'ram', habits: ['dance', 'sing'] },
        { id: 2, name: 'rita', habits: ['code', 'movies'] },
    ];


  return (
    <div className='p-5 bg-amber-200'>
        {person.map((person,i)=>{
            return <h1 key={i} className='uppercase'> {person} </h1>
        })}

        {persons.map((p)=>{
            return <div key={p.id}>
                    <h1>{p.name}</h1>
                    <p>{p.age}</p>
                </div>
        })}

        <div className='bg-pink-300'>
            {posts.map((post)=>{
                return <div key={post.userId} className='bg-yellow-50 mb-5'>
                    <h1>{post.id}</h1>
                    <h1 className='uppercase'>{post.title}</h1>
                    <h1>{post.body}</h1>
                </div>
            })}
        </div>

        <div className='bg-amber-950 text-white'>
            {comments.map((c)=>{
                return <div key={c.id}>
                    <h1>{c.postId}</h1>
                    <h1>{c.name}</h1>
                    <h1>{c.email}</h1>
                    <h1>{c.body}</h1>
                </div>
            })}
        </div>

        <div>
            {people.map((p)=>{
                return <div key={p.id}>
                    <h1>{p.name}</h1>
                    <div className='flex gap-1.5'>
                    {p.habits.map((habit)=>{
                        return <h1>{habit}</h1>
                    })}
                    </div>
                </div>
            })}

            {/* OR */}

            {/* {persons.map(({ habits, id, name }) => {
                return <div key={id}>
                    <h1>{name}</h1>
                    <div className="flex gap-4">
                        {habits.map((habit, i) => {
                        return <p key={i}>{habit}</p>
                        })}
                    </div>
                </div>
            })}    */}
        </div>
    </div>
  )
}
