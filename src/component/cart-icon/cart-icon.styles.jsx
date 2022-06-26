import styled from 'styled-components'
import { ReactComponent as ShoppingSgv} from '../../assets/shopping-bag.svg'

export const Img_ShoppingIcon = styled(ShoppingSgv)`
width: 24px;
height: 24px;
`

export const Div_IconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const Span_ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`