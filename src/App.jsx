// import age, { greet } from "./data"

import { Array } from "./Array";
import Cards from "./Pages/Cards";
import Grid from "./Pages/Grid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Pages/Products";
import Contacts from "./Pages/Contacts";
import Page1 from "./Pages/Home/Page1";
import Page2 from "./Pages/Home/Page2";
import Home from "./Pages/Home/Home";
import Today from "./Pages/today";
// import RootLayOut from "./Components/RootLayOut";
import Notfound from "./Pages/notfound/Notfound";
import RootLayout from "./LeCatering/RootLayout";
import RootBrArchitect from "./BrArchitect/RootBrArchitect";
import RootLayOut from "./C/RootLayOut";
import Hook1 from "./Hooks/Hook1";
import Hook2 from "./Hooks/Hook2";
import RootMeal from "./MEAL/RootMeal";
import MealList from "./MEAL/MealList";
import MealCat from "./MEAL/MealCat";
import MealInfo from "./MEAL/MealInfo";

// export default function App() {
//   greet();
//   console.log(age);
//   return (

//     <div className="p-5">

//       <div className="flex gap-5 justify-center items-center h-screen"> 

//         <div className="border-2 border-pink-800 h-44 w-44 bg-amber-950 shadow-fuchsia-600 rounded-2xl">
//           <h1>hi</h1>
//         </div>
//         <div className="h-44 w-44 bg-amber-950 shadow-fuchsia-600 rounded-2xl">
//           <h1>hi2</h1>
//         </div>

//       </div>
      
//       <h1 className="text-2xl text-pink-500">hello </h1>

//     </div>
//   )
// }

// passing data through components => props ; eg: passing through parent to child
//component returns jsx; javascript xml;  syntax for js that describes components and their working mechanism; allows us to embedd js, css and react to html


// export default function App(){

//   const personName='ram';
//   const age=80;
//   const isLogin= false;

//   const person={
//     nae:"hari",
//     age:20
//   }

//   const habits= ['dance', 'sing'];

//   return(
//     <div>
//       {/* objects cant be displayed directly */}
//       {person.nae}
//       <h1>{`${personName} is ${age} years old with login ${isLogin}`}</h1>
//     </div>
//   )
// }

export default function App() {

//  // without root layout
  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <Home />,
  //     children: [
  //       {
  //         path:'/page1',
  //         // index:true, -shows the true child along with parent file in default when the parent file is rendered
  //         element:<Page1 />
  //       },
  //       {
  //         path:'/page2',
  //         element:<Page2/>
  //       },
  //     ]
  //   },
  //   {
  //     path:'/products',
  //     element: <Products />
  //   },
  //   {
  //     path:'/contacts',
  //     element: <Contacts />
  //   },
  //   {
  //     path:'/colorCustom',
  //     element: <Today />
  //   }
  // ])

  const router =createBrowserRouter([
    {
      path:'/',
      element:<RootLayOut/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path:'products',
          element: <Products />
        },
        {
          path:'contacts',
          element: <Contacts />
        },
        {
          path:'colorCustom',
          element: <Today />
        },
        {
          path:'cater',
          element: <RootLayout />
        },
        {
          path:'brarchi',
          element: <RootBrArchitect />
        },
        {
          path:'hooks',
          element: <Hook1 />
        },
        {
          path:'hookFake',
          element: <Hook2 />
        },
        {
          path:'meal',
          element: <RootMeal />,
          children:[
            {
              index:true,
              element: <MealCat/>
            },
            {
              path:'category-items/:name',
              element: <MealList />
            },
            {
              path:'category/meal/:name',
              element: <MealInfo />
            }
          ]
        },

      ]
    },
    {
      path:'*', //path that is not defined
      element:<Notfound />
    }
  ])
  
    return <RouterProvider router={router} />
  // const post = {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // };


  // return (
  //   <div>
  //     <Array />
  //     <Products/>
  //     <Cards />
  //     <Home />
  //     <Grid />
  //    <div className="p-5 bg-amber-50 m-20 rounded-2xl">
  //       <h3 className="mb-2 bg-pink-300 w-fit p-2 rounded-2xl">{`UserId: ${post.userId}`}</h3>
  //       <h3 className="mb-1 p-2 text-pink-300">{`Id: ${post.id}`}</h3>
  //       <h2 className="mb-3 p-2 uppercase">{`Title: ${post.title}`}</h2>
  //       <h3 className="bg-pink-100 p-2">{`Description: ${post.body}`}</h3>
  //    </div>
  //   </div>
  // )
}