import styled from "styled-components";

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
    span:first-child{
        font-size:25px;
        margin-bottom:10px ;
    }
    span:last-child{
        font-size:13px;
    }
`

function Menu(){
    return (
        <>
        <Categories>
            <Category>
                <span>🥩</span>
                <span>고기/술집</span>
            </Category>
            <Category>
                <span>🍣</span>
                <span>양식/일식</span>
            </Category>
            <Category>
                <span>🍔</span>
                <span>패스트푸드/분식</span>
            </Category>
            <Category>
                <span>🍤</span>
                <span>중식</span>
            </Category>
            <Category>
                <span>🍲</span>
                <span>한식</span>
            </Category>
            <Category>
                <span>🧋</span>
                <span>카페/디저트</span>
            </Category>
        </Categories>
        </>
    )
}

export default Menu;