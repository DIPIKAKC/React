import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

    endpoints: (builder) => ({
        getRecipe: builder.query({
            query: () => ({
                url: '/recipes',
                method: "GET"
            })
        }),

        searchRecipe: builder.query({
            query: (searchTerm) => ({
                url: '/recipe/search',
                params: {
                    q: searchTerm
                },
                method: 'GET'
            })
        })
    })
})

export const { useGetRecipeQuery, useLazyGetRecipeQuery,useLazySearchRecipeQuery } = recipeApi;