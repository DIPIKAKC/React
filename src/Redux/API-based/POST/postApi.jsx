import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://68c8e3b8ceef5a150f629236.mockapi.io/' }),
    tagTypes: ["Post"],

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: '/redux/post',
                method: 'GET'
            }),
            providesTags: ['Post'] //post ma gayera cache bahyera bascha
        }),

        getSinglePost: builder.query({
            query: (id) => ({
                url: `/redux/post/${id}`, // correct URL for a single post
                method: "GET",
            }),
            providesTags: ['Post'],
        }),

        //POST
        createPost: builder.mutation({
            query: (data) => ({
                url: '/redux/post',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Post'] //yesle chai successfully add bhayesi paila ko cache lai expire gardera naya cache banaidincha
        }),

        //Remove
        removePost: builder.mutation({
            query: (id) => ({
                url: `/redux/post/${id}`,
                method: "DELETE",
                // body:id
            }),
            invalidatesTags: ['Post']
        }),

        //update
        updatePost: builder.mutation({
            query: (q) => ({
                url: `/redux/post/${q.id}`,
                body: q.data,
                method: "PUT",
            }),
            invalidatesTags: ['Post']
        })

    })

})

export const { useGetPostsQuery, useGetSinglePostQuery, useCreatePostMutation, useRemovePostMutation, useUpdatePostMutation } = postApi;