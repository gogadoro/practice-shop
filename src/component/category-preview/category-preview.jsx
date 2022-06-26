import { Div_Preview, Link_Title, Div_CategoryContainer } from './category-preview.styles'
import ProductCard from '../product-card/product-card'

const CategoryPreview = ({ title, products }) => {
   return (
      <Div_CategoryContainer>
         <h2>
            <Link_Title to={title}>
               {title.toUpperCase()}
            </Link_Title>
         </h2>
         <Div_Preview>
            {products.filter((_, idx) => idx < 4).map((product) => {
               return <ProductCard key={product.id} product={product} />
            })}
         </Div_Preview>
      </Div_CategoryContainer>
   )
}

export default CategoryPreview