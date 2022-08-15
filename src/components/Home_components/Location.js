import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
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
        display:grid;
        span:first-child{
            font-size:25px;
            margin-bottom:10px ;
        }
        span:last-child{
            font-size:13px;
        }
    }
    
`

function Location(){
    const [category, setCategory] = useState("");

    const onClick = (cate) => {
        setCategory(cate);
    }

    return (
        <>
            <Categories>
                <Category onClick={()=>onClick("외대사거리")}>
                    <Link to = ":key">
                        <span>🌻</span>
                        <span>외대사거리</span>
                    </Link>
                    
                </Category>
                <Category onClick={()=>onClick("모현사거리")}>
                    <Link to = ":key">
                        <span>🌷</span>
                        <span>모현사거리</span>
                    </Link>
                </Category>
                <Category onClick={()=>onClick("배달")}>
                    <Link to = ":key">
                        <span>🛵</span>
                        <span>배달</span>
                    </Link>
                </Category>
                <Category onClick={()=>onClick("교내")}>
                    <Link to = ":key">
                        <span>🏫</span>
                        <span>교내</span>
                    </Link>
                </Category>
            </Categories>
        </>
    )
}

export default Location;