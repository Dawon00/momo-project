import styled from "styled-components";
import {FaRegBookmark, FaBookmark} from 'react-icons/fa'
import { useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import data from "../api_components/Api.json"
import CategoryBox from "./CategoryBox";

const Wrap = styled.div`
    margin-top:20px;
`
const Category = styled.div`
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


function ByCategory({category}){
    const [click, setClick] = useState(false);
    const [key, setKey] = useState(0);

    const {cate} = useParams();

    const onClick = () => {
        setClick(prev=> !prev);
        console.log("click");
    }
    const match = useMatch(`/${cate}`);
    const locaMatch = useMatch("home/location/*");

    if (locaMatch){
        for (var i = 0; i < 4 ;i++){
            if (category === categories[i].text){
                category = categories[i].short;
            }
        }
    }
    
    const categoryData = data.apiList.filter(d => (locaMatch ?d.bLocation :d.bCategory) === category)
    return (
    <Wrap>
    <Category>
        {categoryData.map(b => 
        <div isActive = {match !== null} >
            <CategoryBox 
            index = {b.key}
            name = {b.name}
            bCategory = {b.bCategory}
            bLocation = {b.bLocation}
            hastag = {b.hashtag}
            url = {b.photoUrl}
            />
        </div>)}
    </Category>    
    </Wrap>
    
    
    )
}

export default ByCategory;