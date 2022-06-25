import { useContext, Fragment } from 'react';
import { CategoryMapContext } from '../../context/shop-data.context';
import CategoryPreview from '../../component/category-preview/category-preview';

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoryMapContext)

  return (
   <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title]
        return <CategoryPreview 
          key={title}
          title={title}
          products={products}
        />
      })}
   </Fragment>
  )
}

export default CategoriesPreview;