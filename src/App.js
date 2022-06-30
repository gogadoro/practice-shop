import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react'

import Home from './route/home/home';
import Shop from './route/shop/shop';
import Navigator from './route/navigator/navigator';
import SingIn from './route/sign-in/sign-in';
import CheckOut from './route/checkout/checkout';
import {checkUserSession} from './store/user/user.action'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(checkUserSession()) // if user or not 을 안해도 되는 이유 : 어차피 user의 기본값은 null로 되어있음. 즉 없으면 null 이여서 아무것도 세팅하지 않음.
  }, [])


  return (
    <Routes>
      <Route path='/' element={<Navigator />}>
        <Route path='' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SingIn />} />
        <Route path='checkout' element={<CheckOut/>} />
      </Route>
    </Routes>
  );
}

export default App;
