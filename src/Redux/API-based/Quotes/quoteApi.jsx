import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const quoteApi= createApi({
    reducerPath:'quoteApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),

    endpoints:(builder)=>({
        getQuote:builder.query({
            query:()=>({
                url:'/quotes/1',
                method:'GET'
            }),
        }),

        getAllQuotes:builder.query({
            query:()=>({
                url:'/quotes',
                method:"GET"
            })
        }),

        //POST
        postQuote:builder.mutation({
            mutation:(todo)=>({
                url:'/todos/add',
                method:"POST",
                body:todo
            })
        })
    })

})

 export const {useGetQuoteQuery, useGetAllQuotesQuery, usePostQuoteMutation}= quoteApi;