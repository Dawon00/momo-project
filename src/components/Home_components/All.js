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