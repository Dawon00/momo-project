import { useEffect, useState } from "react"
import styled from "styled-components"
import {FaRegBookmark, FaBookmark} from 'react-icons/fa'
import { useRecoilState } from "recoil"
import { bookmarkRes } from "../../atom"
import { useNavigate } from "react-router-dom"

const Wrap = styled.div`
    margin:5px;
    border: 1px solid #ECECEC;
    border-radius: 10px;
`
const Img = styled.div`
    background-color: #F0EDFF ;
    height: 250px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    border-radius: 10px 10px 0 0;
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

        &:hover {
            color: ${props => props.theme.pointColor}
        }
    }
    span:last-child {
        cursor:pointer;
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

function CategoryBox ({index,name,bCategory,bLocation,hastag, url}){
    const [bookmark, setBookmark] = useRecoilState(bookmarkRes);

    const bool = bookmark.includes(name);
    const [click, setClick] = useState(bool);

    const onClick = () => {
        setClick(prev=> !prev);
        setBookmark( (prev) => click ? prev.filter((b) => b!== name) : [name,...prev ])
    }
    const navigate = useNavigate();
    const toDetail = () => {
        navigate(`/detail/${index}`)
    }
    return (
        <Wrap >
            <Img url = {url}></Img>
            <Restaurant>
                <span onClick = {toDetail}>{name}</span>
                <span onClick = {onClick}>{click  ?<FaBookmark/> :<FaRegBookmark/>}</span>
            </Restaurant>
            <Hashtags>
                {bCategory ?<span>{bCategory}</span> :null}
                {bLocation ?<span>{bLocation}</span> :null}
                {hastag ? <span>{hastag}</span> :null}
            </Hashtags>
        </Wrap>
    )

}

export default CategoryBox;