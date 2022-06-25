import { useState, useContext, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../component/product-card/product-card';
import { CategoryMapContext } from '../../context/shop-data.context';

import './category.scss'


const Category = () => {
   const { category } = useParams();
   const { categoryMap } = useContext(CategoryMapContext)
   const [products, setProducts] = useState(categoryMap[category])

   useEffect(() => {
      setProducts(categoryMap[category])
   }, [category, categoryMap])

   return (
      <Fragment>
         <h2 className='category-title'>{category.toUpperCase()}</h2>
         <div className='category-container'>
            {products && products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </Fragment>
   )
}

export default Category;