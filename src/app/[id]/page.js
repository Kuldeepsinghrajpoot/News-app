'use client'

import React, { useEffect, useState } from 'react';

const Page = ({params}) => {

    const [products, setproducts] = useState([]);

    const getproducts = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${params.id}&apiKey=76114629f69449f59cc52bce7e239b15`);
            const data = await res.json();
            setproducts(data.articles);
        } catch (error) {
            console.log("somethingwent wrong", error);
        }
        
    }
    console.log(products);

    useEffect(() => {
        getproducts();

    }, [])
    return (

        <section className="text-gray-600 body-font">

            <div className="container px-5 py-24 mx-auto grid grid-cols-4" >

                {products.map((e, id) => {

                    const { author, title, description, url, urlToImage, publishedAt } = e;
                    console.log(urlToImage);
                    return (
                        <div className="-m-4" key={id}>
                            <div className="p-10 gap-6  w-full">
                                <div className=" rounded ">
                                    {urlToImage===null?<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019' alt='no image' />:
                                    <img alt="no image found" className="object-cover object-center w-full h-full block" src={urlToImage} />
                    }
                                    </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-sm  title-font mb-1">{title}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{description}</h2>
                                    <p className="mt-1">{publishedAt}</p>
                                    <p className="mt-1 font-bold text-black">by-{author}</p>
                                    
                                    <h2 className='text-blue-700 font-bold'><a href={url}>Learn more....</a></h2>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </section>


    );
}

export default Page;
