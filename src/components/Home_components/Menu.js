import { Link, Route, Routes, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { categoryState } from "../../atom";
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
        emogi: '🥩',
        text: '고기/술집'
    },
    {
        name:'WesternFood',
        emogi: '🍣',
        text: '양식/일식'
    },
    {
        name:'fastfood',
        emogi: '🍔',
        text: '패스트푸드/분식'
    },
    {
        name:'ChineseFood',
        emogi: '🍤',
        text: '중식'
    },
    {
        name:'KoreanFood',
        emogi: '🍲',
        text: '한식'
    },
    {
        name:'dessert',
        emogi: '🧋',
        text: '카페/디저트'
    },
]
function Menu(){
    const [category, setCategory] = useRecoilState(categoryState);
    
    const onClick = (cate) => {
        setCategory(cate);
    }
    const cateMatch = useMatch(`home/location/${category}`)
    

    return (
        <>
            <Categories>
                {categories.map(c => (
                    <Category isActive = {cateMatch !== null} active = {category === c.name}> 
                     <Link to = {`${c.name}`} onClick = {()=>onClick(c.name)} >
                        <span>{c.emogi}</span>
                        <span>{c.text}</span>
                         </Link>
                    </Category> 
                ))}
            </Categories>

            <Routes>
                <Route path = "/:category" element={<ByCategory category={category}/>}/>
            </Routes>
        </>
    )
}

export default Menu;