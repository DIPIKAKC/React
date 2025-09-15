import React from 'react'
import { FaCartArrowDown, FaIdBadge, FaRegHeart, FaStar, FaTruck } from "react-icons/fa";

export default function Products() {

    const products = [
    {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 10.48,
        "rating": 2.56,
        "stock": 99,
        "tags": [
            "beauty",
            "mascara"
        ],
        "brand": "Essence",
        "sku": "BEA-ESS-ESS-001",
        "weight": 4,
        "dimensions": {
            "width": 15.14,
            "height": 13.08,
            "depth": 22.99
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
            },
            {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
            },
            {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "5784719087687",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        },
        {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category": "beauty",
        "price": 19.99,
        "discountPercentage": 18.19,
        "rating": 2.86,
        "stock": 34,
        "tags": [
            "beauty",
            "eyeshadow"
        ],
        "brand": "Glamour Beauty",
        "sku": "BEA-GLA-EYE-002",
        "weight": 9,
        "dimensions": {
            "width": 9.26,
            "height": 22.47,
            "depth": 27.67
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
            "rating": 5,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Savannah Gomez",
            "reviewerEmail": "savannah.gomez@x.dummyjson.com"
            },
            {
            "rating": 4,
            "comment": "Awesome product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Christian Perez",
            "reviewerEmail": "christian.perez@x.dummyjson.com"
            },
            {
            "rating": 1,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nicholas Bailey",
            "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 20,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "9170275171413",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
        },
    ]



  return (
    // shadow-[0_0_15px_rgba(0,0,0,0.2)] →
        //     0_0 = no x/y offset → shadow spreads evenly.
        //      15px = blur radius.
        //      rgba(0,0,0,0.2) = soft black shadow with 20% opacity.
        //normal way-shadow shadoe-color


    <div className='h-fit w-110 my-10 mx-auto space-y-10'>
        {products.map((product) => {
            return <div key={product.id} className="shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl py-4 px-3 bg-white">

                {/* img& discount badge */}
                <div className='relative'>
                    <img src={product.thumbnail} className='border-b-1 border-gray-200 w-full h-80 bg-contain relative'alt="" />
                    <div className='flex'>
                        <div className='absolute top-0 left-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-lg'> -{product.discountPercentage}%</div>
                        <FaRegHeart className='absolute top-0 right-0 text-pink-500 size-5'/>
                    </div>
                </div>

                {/* product info */}
                
                {/* brand/ cat */}
                <div className='flex justify-between items-center my-2 mx-2'>
                    <div className=' text-pink-500 font-bold uppercase'> {product.brand}</div>
                    <div className=' bg-gray-300 w-fit text-white text-xs px-3 py-1 rounded-2xl'> {product.category}</div>
                </div>

                {/* title */}
                <div className='flex'>
                    <h1 className="font-bold uppercase mx-2">{product.title}</h1>
                    {/* rate / review */}
                    <div className='flex items-center'>
                            <FaStar className='text-yellow-300 size-5 mx-2' />
                            <div className='text-s text-gray-400'>{product.rating}</div>
                    </div>
                </div>
                

                
                {/* price */}
                <div className='text-2xl font-bold mx-2 mb-2'>${product.price}</div>

                

                <div className='text-gray-400 text-s mx-2 mb-2'>{product.description}</div>

                {/* tags */}
                <div className='flex mx-2 mb-4'>
                    {product.tags.map((tag,i)=>{
                        return(
                            <div key={i} className='text-xs bg-pink-200 text-pink-500 px-3 py-1 rounded-2xl mr-2 w-fit'>#{tag}</div>
                        )
                    })}
                </div>

                {/* office info */}
                <div className='text-xs flex flex-col gap-1'>
                    {/* warranty and shipping info */}
                    <div className='text-gray-400 mx-2 flex justify-between'>
                        <div className='flex gap-2 items-center'><FaIdBadge/>{product.warrantyInformation}</div>
                        <div className='flex gap-2 items-center'><FaTruck/> {product.shippingInformation}</div>
                    </div>

                    {/* stock sku */}
                    <div className='text-gray-400 flex mx-2 justify-between'>
                        <div>Stock: {product.stock}</div>
                        <div>SKU: {product.sku}</div>
                    </div>

                    <div className='mx-2 text-gray-400 mb-2'>Return Policy: {product.returnPolicy}</div>
                </div>

                <hr className="border-t border-gray-200 m-2"></hr>

                {/* array of object */}
                <p className='mx-2 font-bold text-pink-500 mt-2 mb-1'>Reviews</p>
                <div className='mx-2 space-y-2 mb-5'>
                    {product.reviews.map(({ comment, reviewerName, rating, date, reviewerEmail }, i) => {
                        return <div key={i} className='flex flex-col py-1 px-3 bg-gray-300 text-white rounded-lg text-xs'>
                            <p>{reviewerName}: -{comment}</p>
                        </div>
                    })}
                </div>
                
                {/* quick access */}
                <div className='mx-2 flex justify-between bg-gray-100 mb-5 px-3 py-2 items-center rounded-lg'>
                    <div className='flex flex-col'>
                        <div className='font-bold'>Quick Access</div>
                        <div className='text-xs text-gray-400'>Scan for product details</div>
                        <div className='text-xs text-gray-400'>Barcode: {product.meta.barcode}</div>
                    </div>
                    <img src={product.meta.qrCode}  className='size-20' alt="" />
                </div>

                {/* btns */}
                <div className='bg-pink-500 flex mx-2 py-2 px-3 justify-center text-white font-bold gap-2 rounded-lg items-center mb-3'><FaCartArrowDown />Add to Cart</div>


                {/* order num */}
                <div className='text-gray-400 text-xs flex justify-center'>Minimum order: {product.minimumOrderQuantity}</div>

            </div>
       })}
    </div>
  )
}
