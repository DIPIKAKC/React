import { Card } from '@heroui/react'
import React from 'react'

export default function CardLoadSkeleton() {
    return (
        <div className='p-8'>
            <Card className="w-full p-4 animate-pulse">
                <div className="pb-0 pt-2 px-4 flex-col items-start">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                </div>
                <div className="overflow-visible py-2">
                    <div className="overflow-hidden w-full h-60 rounded-xl bg-gray-200"></div>
                </div>
            </Card>
        </div>
    )
}

