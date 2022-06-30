import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import ProductCard from '../../component/product-card/product-card';
import Spinner from '../../component/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/cartegory/category.selector';
import { Div_CategoryContainer, H2_Title } from './category.styles.jsx'


const Category = () => {
   const { category } = useParams();
   const categoriesMap = useSelector(selectCategoriesMap)
   const isLoading = useSelector(selectCategoriesIsLoading)

   const [products, setProducts] = useState(categoriesMap[category])

   useEffect(() => {
      setProducts(categoriesMap[category])
   }, [category, categoriesMap])

   return (
      <Fragment>
         <H2_Title>{category.toUpperCase()}</H2_Title>
         {
            isLoading 
               ? <Spinner />
               : <Div_CategoryContainer>
                  {products && products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </Div_CategoryContainer>
         }
      </Fragment>
   )
}

export default Category;