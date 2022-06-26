import { useState, useContext, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../component/product-card/product-card';
import { CategoryMapContext } from '../../context/shop-data.context';

import {Div_CategoryContainer, H2_Title} from './category.styles.jsx'


const Category = () => {
   const { category } = useParams();
   const { categoryMap } = useContext(CategoryMapContext)
   const [products, setProducts] = useState(categoryMap[category])

   useEffect(() => {
      setProducts(categoryMap[category])
   }, [category, categoryMap])

   return (
      <Fragment>
         <H2_Title>{category.toUpperCase()}</H2_Title>
         <Div_CategoryContainer>
            {products && products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </Div_CategoryContainer>
      </Fragment>
   )
}

export default Category;