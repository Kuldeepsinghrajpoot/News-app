
import React  from 'react';
import axios from 'axios';
async function fetchData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=76114629f69449f59cc52bce7e239b15');
    //   console.log(response.data); // The fetched data
    return response.data.articles
    } catch (error) {
      console.error('Error:', error);
    }
  }
const Page = async() => {
const products = await fetchData();
    return (

        <section className="text-gray-600 body-font">

            <div className="container px-5  mx-auto grid grid-cols-1 md:grid-cols-4" >

                {products.map((e, id) => {

                    const { author, title, description, url, urlToImage, publishedAt } = e;
                    // console.log(urlToImage);
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
