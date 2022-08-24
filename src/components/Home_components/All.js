import styled from "styled-components";
import {FaRegBookmark, FaBookmark} from 'react-icons/fa'
import { useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import data from "../api_components/Api.json"

const Wrap = styled.div`
    position: absolute ;
    top: 390px;
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

const categories = [
    {
        text: '외대사거리',
        short:'외사'
    },
    {
        text: '모현사거리',
        short:'모사'
    },
    {
        text: '배달',
        short:'배달'
    },
    {
        text: '교내',
        short:'교내'
    },
]


function All({category}){
    const [click, setClick] = useState(false);
    const [key, setKey] = useState(0);

    const onClick = (b) => {
        setClick(prev=> !prev);
        setKey(b);
    }
    
    const categoryData = data.apiList

    return (
    <Wrap category = {category}>
        {categoryData.map(b => 
        <Box key = {b.name}>
            <Img></Img>
            <Restaurant>
                <span>{b.name}</span>
                <span onClick = {()=>onClick(b)}>{click&& key===b.name ? <FaBookmark/>:<FaRegBookmark/>}</span>
            </Restaurant>
            <Hashtags>
                {b.bCategory ?<span>{b.bCategory}</span> :null}
                {b.bLocation ?<span>{b.bLocation}</span> :null}
                {b.hastag ? <span>{b.hastag}</span> :null}
            </Hashtags>
        </Box>)}
    </Wrap>)
}

export default All;