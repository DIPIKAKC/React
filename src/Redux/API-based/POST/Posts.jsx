import React from 'react'
import { useGetPostsQuery } from './postApi';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';
import CardLoadSkeleton from './CardLoadSkeleton';
import RemovePost from './RemovePost';
import { useNavigate } from 'react-router';


export default function Posts() {
    const { data: getData, isLoading: load, error: err } = useGetPostsQuery();
    const nav = useNavigate();

    if (load) {
        return (
            <div className="grid grid-cols-4 gap-4">
                <CardLoadSkeleton />
                <CardLoadSkeleton />
                <CardLoadSkeleton />
                <CardLoadSkeleton />
                <CardLoadSkeleton />
                <CardLoadSkeleton />
            </div>
        );
    }
    return (
        <div className='p-8'>

            <div className='grid grid-cols-4 gap-4'>
                {getData && getData.map((posts) => {
                    return <Card key={posts.id} className='w-full px-3 py-2'>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <small className="text-default-500">{posts.author}</small>
                            <h4 className="font-bold text-large">{posts.title}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <div className='overflow-hidden w-full h-60 rounded-xl'>
                                <Image
                                    alt="Card background"
                                    className="object-cover"
                                    src={posts.image}
                                />
                            </div>
                        </CardBody>
                        <CardFooter className='flex gap-3 justify-end'>
                            <Button isIconOnly aria-label="Take a photo" color="warning" variant="faded" onPress={()=>nav(`update-posts/${posts.id}`)}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                            {/* <Button isIconOnly aria-label="Like" color="danger">
                                <i className="fa-solid fa-trash"></i>
                            </Button> */}
                            <RemovePost id={posts.id} />
                            
                        </CardFooter>
                    </Card>
                })}
            </div>

        </div>
    )
}
