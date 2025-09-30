import React from 'react'
import { useGetAllQuotesQuery, useGetQuoteQuery } from './quoteApi'
import { Button, Card, CardBody } from '@heroui/react';

export default function Quotes() {
    const{data, isLoading, error}=useGetQuoteQuery();
    const{data:alldata, isLoading:allload, error:allerror}=useGetAllQuotesQuery();
    console.log(data);
    return (
        <div className='p-10 flex flex-col gap-2'>
            <Card>
                <CardBody>
                    {data.quote}
                </CardBody>
            </Card>

            {alldata && alldata.quotes.map((d)=>{
                return <Card key={d.id}>
                    <CardBody>{d.quote}</CardBody>
                </Card>
            })}

            
        </div>
    )
}
