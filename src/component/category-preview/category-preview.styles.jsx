import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Div_CategoryContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`

export const Link_Title = styled(Link)`
font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
width: fit-content;
text-decoration: none;
color: black;
`

export const Div_Preview = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`
