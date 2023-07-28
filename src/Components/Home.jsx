import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/products'
import InfiniteScroll from 'react-infinite-scroll-component'


const Home = () => {
   const dispatch = useDispatch();
   const products = useSelector(state => state.products.products);
   console.log(products)
   const [skip, setSkip] = useState(0);
   const { user } = useSelector((data) => data)

   const loading = useSelector(state => state.products.loading);
   const limit = useSelector(state => state.products.limit);
   const error = useSelector(state => state.products.error);
   const navigate = useNavigate();
   useEffect(() => {
      if (!user.user.token) {
         navigate('/login');
      }
   }, [])
   console.log(skip)

   useEffect(() => {

         dispatch(getProducts(skip))
         const data = skip + 1;
         setSkip(data)
   
   }, [])
   const fetchData = () => {

      dispatch(getProducts(skip + 1))
      const data = skip + 1;
      setSkip(data)
   };


   return (
      <>
         <Header />
         <div >

            <InfiniteScroll

               dataLength={products.length}
               next={fetchData}
               hasMore={limit > ((skip + 1) * 30)} // Replace with a condition based on your data source
               loader={<p>Loading...</p>}
               endMessage={<p>No more data to load.</p>}
            >
               <div className='d-flex flex-wrap'>

                  {products?.map((data, i) => (
                     <Card data={data} key={i} />
                  ))}
               </div>
            </InfiniteScroll>
         </div>
      </>
   )
}

export default Home;
