import {
  createContext,
  useState,
  useEffect,
} from 'react'

import { onAuthStateChangedListener } from '../utils/firebase/firebase';
import { setUserDbFromAuth } from '../utils/firebase/firebase';

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,   // dafault value
});


// userProvider is literal functional Component
// value : UserContext의 actual value 를 받는다.
export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        setUserDbFromAuth(user) 
      }
      setCurrentUser(user); // if user or not 을 안해도 되는 이유 : 어차피 user의 기본값은 null로 되어있음. 즉 없으면 null 이여서 아무것도 세팅하지 않음.
    })

    return unsubscribe
  }, [])



  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}