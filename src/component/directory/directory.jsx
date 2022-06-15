import Categories from '../categories/categories';
import './directory.scss';

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
            {categories.map((item) => (
                <Categories key={item.id} category={item} />
            ))}
        </div>
    )
}

export default Directory;