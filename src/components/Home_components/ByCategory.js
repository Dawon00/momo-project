import styled from "styled-components";
import {FiBookmark} from 'react-icons/fi'

const Category = styled.div`
    position: absolute ;
    top: 530px;
    display:grid;
    grid-template-columns:1fr 1fr ;
    width: 100%;
    overflow-y:scroll;
    overflow-y:hidden;
`
const Box = styled.div`
    margin:5px;
    border: 1px solid #ECECEC;
    border-radius: 3px;
`
const Img = styled.div`
    background-color: #F0EDFF ;
    height: 250px;
`
const Restaurant = styled.div`
    height: 50px;
    margin:10px;
    display:flex ;
    justify-content: space-between;
    align-items: center ;
    font-size:20px;
    span:first-child{
        font-weight: bold ;
        font-size:20px;
    }
    span:last-child {
        font-size:25px;
        color: ${props => props.theme.pointColor}
    }
`
const Hashtags = styled.div`
    margin:10px 10px 20px 10px;
    span {
        border-radius: 10px ;
        background-color: #ECECEC ;
        padding:5px;
        margin-right:10px;
        color: #6D6D6D;
    }
`
function ByCategory({category}){
    return (
    <Category>
        {[1,2,3,4].map(b => 
        <Box >
            <Img></Img>
            <Restaurant>
                <span>음식점 이름</span>
                <span><FiBookmark/></span>
            </Restaurant>
            <Hashtags>
                <span>{category}</span>
                <span>해시태그</span>
                <span>해시태그</span>
            </Hashtags>
        </Box>)}
    </Category>)
}

export default ByCategory;