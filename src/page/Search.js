import styled from "styled-components";
import React from "react";
import data from "../components/api_components/Api.json"
import CategoryBox from "../components/Home_components/CategoryBox";
import { useMatch, useParams } from "react-router-dom";
import { useLocation } from "react-router";

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
const Search=()=>{
    const location = useLocation();
    const {cate} = useParams();
    const userInput = new URLSearchParams(location.search).get("keyword");
    const filtered = data.apiList.filter((itemList) => {
      return itemList.name.toUpperCase().includes(userInput.toUpperCase());
    });
    const match = useMatch(`/${cate}`);
    return (
    <Wrap>
        <Category>
            {filtered.map((itemList) => 
            <div key = {itemList.key}isActive = {match !== null}>
                <CategoryBox 
                index = {itemList.key}
                name = {itemList.name}
                bCategory = {itemList.bCategory}
                bLocation = {itemList.bLocation}
                hastag = {itemList.hashtag}
                />
       </div>
       )}
        </Category>  
    </Wrap>
      
    );
    }
    

export default Search;