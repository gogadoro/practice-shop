import './categories.scss';

const Categories = props => {
    const { title, imageUrl } = props.category
    return (
        <div className='category-container'>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Categories;