import {
    Div_BackGroundImg,
    Div_Body,
    Div_DirItemContainer
} from './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom'


const DirectoryItem = ({category}) => {
    const { title, imageUrl, route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <Div_DirItemContainer onClick={onNavigateHandler}>
            <Div_BackGroundImg imageUrl={imageUrl} />
            <Div_Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Div_Body>
        </Div_DirItemContainer>
    )
}

export default DirectoryItem;