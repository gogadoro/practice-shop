import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon from '../../component/cart-icon/cart-icon';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.jsx';


import {
    Div_Navigation,
    Link_LogoContainer,
    Div_LinksContainer,
    Link_NavLink,
} from './navigator.styles.jsx'


const Navigator = () => {
    const { currentUser } = useContext(UserContext);
    const { isOpenCart } = useContext(CartContext)

    const signOutHanlder = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <Div_Navigation>
                <Link_LogoContainer to='/'>
                    < CrwnLogo className='logo' />
                </Link_LogoContainer>
                <Div_LinksContainer>
                    <Link_NavLink to='/shop'>
                        SHOP
                    </Link_NavLink>
                    {currentUser ? (
                        <Link_NavLink as='span' onClick={signOutHanlder}>로그아웃</Link_NavLink>
                    ) : (
                        <Link_NavLink to='/sign-in'>
                            로그인
                        </Link_NavLink>
                    )}
                    <CartIcon />
                </Div_LinksContainer>
                {isOpenCart && <CartDropdown />}
            </Div_Navigation>
            <Outlet />
        </Fragment>
    )
}

export default Navigator;