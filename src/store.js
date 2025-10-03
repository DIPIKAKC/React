import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Redux/Locally/Form-local/UserSlice";
import { productApi } from "./Redux/API-based/product/productApi";
import { recipeApi } from "./Redux/API-based/Recipes/recipeApi";
import { quoteApi } from "./Redux/API-based/Quotes/quoteApi";
import { postApi } from "./Redux/API-based/POST/postApi";


export const store=configureStore({
    reducer:{
        //locally
        UserSlice:UserSlice.reducer,

        //GLOBALLY
        // kunai pani object ko keyname ko value lai arko thau ma as a keyname pass garda yesari garne
        [productApi.reducerPath]:productApi.reducer,
        [recipeApi.reducerPath]:recipeApi.reducer,

        //for quotes
        [quoteApi.reducerPath]:quoteApi.reducer,

        //POST
        [postApi.reducerPath]:postApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat([
            productApi.middleware,
            recipeApi.middleware,
            quoteApi.middleware,
            postApi.middleware
        ]),
})