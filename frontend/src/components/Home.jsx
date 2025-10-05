import React from 'react'
import ProductCard from './ProductCard'

const Home = () => {

     const products=[
    {
      name:"Premium Shirt",
      image:"https://imgs.search.brave.com/RwYVbWMd3GLvaSpfz7XRpGn-FrhD51fRvtx6tqYreSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvc2hpcnQvMS9z/L2cvbS1ydC1zaGly/dHpvbmUtb3JpZ2lu/YWwtaW1haDQ2amI3/ZHQycmRodi5qcGVn/P3E9NzA",
      price:16
    },
    {
      name:"Casual T-Shirt",
      image:"https://imgs.search.brave.com/jh8uDfIeIYCEL9LTZ5ClzvGVbbAq_NlVhHAQJ5JpnJs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvNDQ1OTIy/NDU5L2NkMDQ3XzUx/Mi53ZWJwP3dpZHRo/PTM2MA",
      price:20
    },
    {
      name:"Classic Watch",
      image:"https://imgs.search.brave.com/Bks7NPxH3ze17RmPNR28CpqRT0lqU56qGxewGYrZtqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Fi/LzE0LzYwYWIxNDM2/OTE1ZTZjMjg3ZTQ4/MzMzYWZlZWM1NjIx/LmpwZw",
      price:20
    },
    {
      name:"Elegant Kurta",
      image:"https://imgs.search.brave.com/RnbnQbc3ke0vEA6NMNwRJ9EvP6HfocCMpbMXo3tbIPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXMudXRzYXZmYXNo/aW9uLmNvbS9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvY2FjaGUv/MS9zbWFsbF9pbWFn/ZS8yOTV4LzA0MGVj/MDliMWUzNWRmMTM5/NDMzODg3YTk3ZGFh/NjZmL2UvbS9lbWJy/b2lkZXJlZC1kdXBp/b24tc2lsay1rdXJ0/YS1pbi1uYXZ5LWJs/dWUtdjEtbWxjMzgy/XzEuanBn",
      price:20
    },
  ]

  return (
    <div className='w-full min-h-screen bg-gray-50 p-8 sm:p-12 md:p-20'>
        
        <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight'>
            Explore Our <span className='text-indigo-600'>Collection</span>
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                products.map((item,key)=>{
                    return ( <ProductCard item={item} key={key}/> )
                })
            }
        </div>

    </div>
  )
}

export default Home