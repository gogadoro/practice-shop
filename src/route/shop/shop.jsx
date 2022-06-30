import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import {fetchCategoriesStart} from '../../store/cartegory/category.action'

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.scss';

const Shop = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  },[])

  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> }/>
      <Route path=':category' element={ <Category />} />
    </ Routes>
  )
}

export default Shop;