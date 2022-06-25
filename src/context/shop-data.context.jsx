import {createContext, useState, useEffect} from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase'




export const CategoryMapContext = createContext({
  categoryMap: {},
})

export const CategoryMapProvider = ({children}) => {
  const [categoryMap, setCategoryMap] = useState({})

  useEffect(()=> {
    const getCategoryMap = async() => {
      const result = await getCategoriesAndDocuments()
      setCategoryMap(result)
    }
    getCategoryMap()
  },[])

  const value = {categoryMap}
  
  return (
  < CategoryMapContext.Provider value={value} >{children}</ CategoryMapContext.Provider >
  )
}
