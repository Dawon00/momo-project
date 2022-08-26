import styled from "styled-components";
import React from "react";
import data from "../components/api_components/Api.json"
import CategoryBox from "../components/Home_components/CategoryBox";
import { useMatch, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import Footer from "../components/Home_components/Footer";

const Wrap = styled.div`
    height:100%;

`
const SearchDiv = styled.div`
    margin:60px;
    min-height: 80vh;
    width: 100%;
    overflow-y:scroll;
    overflow-y:hidden;
`
const SearchText = styled.p `

`
const SearchResult = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr ;
`
const Search=()=>{
    const location = useLocation();
    const userInput = new URLSearchParams(location.search).get("keyword");
    const filtered = data.apiList.filter((itemList) => {
      return itemList.name.toUpperCase().includes(userInput.toUpperCase());
    });
    return (
    <Wrap>
        <SearchDiv>
            <SearchText>
                "{userInput}"에 관한 검색결과 {userInput.length}건
            </SearchText>
            <SearchResult>
               {filtered.map((itemList) => 
                <div key = {itemList.key}>
                    <CategoryBox 
                    index = {itemList.key}
                    name = {itemList.name}
                    bCategory = {itemList.bCategory}
                    bLocation = {itemList.bLocation}
                    hastag = {itemList.hashtag}
                    url = {itemList.photoUrl}
                    />
                </div> )}
        </SearchResult>
            
       
        </SearchDiv>
        <Footer/>
    </Wrap>
      
    );
    }
    

export default Search;