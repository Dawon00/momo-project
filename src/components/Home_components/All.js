import styled from "styled-components";
import {FaRegBookmark, FaBookmark} from 'react-icons/fa'
import { useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import data from "../api_components/Api.json"
import CategoryBox from "./CategoryBox";

const Wrap = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr ;
    width: 95%;
    margin: 10px auto;
    overflow-y:scroll;
    overflow-y:hidden;
    height:100%;
`
const Box = styled.div`
    margin:10px;
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

    const categoryData = data.apiList

    return (
    <Wrap category = {category}>
        {categoryData.map(b => 
        <div>
            <CategoryBox 
            index = {b.key}
            name = {b.name}
            bCategory = {b.bCategory}
            bLocation = {b.bLocation}
            hastag = {b.hashtag}
            url = {b.photoUrl}
            />
        </div>)}
    </Wrap>)
}

export default All;