import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';


const Navigator = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)
    console.log('currenst user :', currentUser)

    const signOutHanlder = () => dispatch(signOutStart())

    return (
        <Fragment>
            <Div_Navigation>
                <Link_LogoContainer to='/'>
                    < CrwnLogo className='logo' />
                </Link_LogoContainer>
                <Div_LinksContainer>
                    <Link_NavLink to='/shop'>SHOP</Link_NavLink>

                    {currentUser ? (
                        <Link_NavLink as='span' onClick={signOutHanlder}>
                            로그아웃
                        </Link_NavLink>
                    ) : (
                        <Link_NavLink to='/sign-in'>
                            로그인
                        </Link_NavLink>
                    )}
                    <CartIcon />
                </Div_LinksContainer>
                {isCartOpen && <CartDropdown />}
            </Div_Navigation>
            <Outlet />
        </Fragment>
    )
}

export default Navigator;