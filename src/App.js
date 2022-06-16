import Home from './route/home/home';
import Shop from './route/shop/shop';
import Navigator from './route/navigator/navigator';
import SingIn from './route/sign-in/sign-in';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigator />}>
        <Route path='' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;
