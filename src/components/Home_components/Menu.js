import { useState } from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { categoryState, menuCateState } from "../../atom";
import ByCategory from "./ByCategory";

const Wrap = styled.div`
    margin:20px;
    flex:1;
`
const Categories = styled.ul`
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

    &:hover {
        background-color: #F0EDFF;
    }


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
        name: 'meat',
        emogi: 'π₯©',
        text: 'κ³ κΈ°/μ μ§'
    },
    {
        name:'WesternFood',
        emogi: 'π£',
        text: 'μμ/μΌμ'
    },
    {
        name:'fastfood',
        emogi: 'π',
        text: 'ν¨μ€νΈνΈλ/λΆμ'
    },
    {
        name:'ChineseFood',
        emogi: 'π€',
        text: 'μ€μ'
    },
    {
        name:'KoreanFood',
        emogi: 'π²',
        text: 'νμ'
    },
    {
        name:'dessert',
        emogi: 'π§',
        text: 'μΉ΄ν/λμ νΈ'
    },
]
function Menu(){
    const [category, setCategory] = useState("");
    const [menuCategory, setMenuCategory] = useRecoilState(menuCateState);
    
    const onClick = (name, text) => {
        setCategory(text);
        setMenuCategory(name);
    }

    const cateMatch = useMatch(`home/location/${menuCategory}`)
    

    return (
        <Wrap>
            <Categories>
                {categories.map(c => (
                    <Category isActive = {cateMatch !== null} active = {menuCategory === c.name}> 
                     <Link to = {`${c.name}`} onClick = {()=>onClick(c.name, c.text)} >
                        <span>{c.emogi}</span>
                        <span>{c.text}</span>
                         </Link>
                    </Category> 
                ))}
            </Categories>

            <Routes>
                <Route path = "/:cate" element={<ByCategory category={category}/>}/>
            </Routes>
        </Wrap>
    )
}

export default Menu;