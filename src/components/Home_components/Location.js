import { useEffect, useState } from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled,{css} from "styled-components";
import { categoryState, locaCateState } from "../../atom";
import ByCategory from "./ByCategory";

const Categories = styled.ul`
    position: absolute ;
    top:430px;
    display: flex ;
`
const Category = styled.li`
    text-align: center ;
    border: 1px solid #ECECEC;
    border-radius:10px ;
    width:100px;
    height:80px;
    margin-right: 15px ;
    display: grid;
    align-content: center;
    color: #6D6D6D;
    cursor: pointer;
    a{
        padding:20px 10px 20px 10px;
        display:grid;
        span:first-child{
            font-size:25px;
            margin-bottom:10px ;
        }
        span:last-child{
            font-size:13px;
        }
    }
    
    ${props => props.active && css`
        border: 1px solid ${props=>props.theme.pointColor};
        background-color:  #F0EDFF;
    `}
    
`

const categories = [
    {
        name: 'hufsIntersection',
        emogi: '🌻',
        text: '외대사거리'
    },
    {
        name:'MohyeonIntersection',
        emogi: '🌷',
        text: '모현사거리'
    },
    {
        name:'delivery',
        emogi: '🛵',
        text: '배달'
    },
    {
        name:'onCampus',
        emogi: '🏫',
        text: '교내'
    },
]



function Location(){
    const [category, setCategory] = useState("");
    const [locaCategory, setLocaCategory] = useRecoilState(locaCateState);
    
    const onClick = (name, text) => {
        setCategory(text);
        setLocaCategory(name);
    }
    const cateMatch = useMatch(`home/location/${locaCategory}`);

    return (
        <>
            <Categories>
                {categories.map(c => (
                    <Category isActive = {cateMatch !== null} active = {locaCategory === c.name}> 
                     <Link to = {`${c.name}`} onClick = {()=>onClick(c.name, c.text)} >
                        <span>{c.emogi}</span>
                        <span>{c.text}</span>
                         </Link>
                    </Category> 
                ))}
            </Categories>

            <Routes>
                <Route path = "/:locaCategory" element={<ByCategory category={category}/>}/>
            </Routes>
        </>
    )
}

export default Location;