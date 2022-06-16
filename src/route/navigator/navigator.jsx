import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigator.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

const Navigator = () => {
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
                    <Link className='nav-link' to='/sign-in'>
                        로그인
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigator;