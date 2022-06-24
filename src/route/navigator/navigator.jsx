import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon from '../../component/cart-icon/cart-icon';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.jsx';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigator.scss'


const Navigator = () => {
    const { currentUser } = useContext(UserContext);
    const { isOpenCart } = useContext(CartContext)

    const signOutHanlder = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    < CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutHanlder}>로그아웃</span>
                    ) : (
                        <Link className='nav-link' to='/sign-in'>
                            로그인
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isOpenCart && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigator;