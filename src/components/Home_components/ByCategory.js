import styled from "styled-components";

const Category = styled.div`
    position: absolute ;
    top: 530px;
    display:grid;
    grid-template-columns:1fr 1fr ;
    background-color:#ECECEC;
    height:800px;
    width: 100%;
    overflow-y:scroll;
    overflow-y:hidden;
`
const Box = styled.div`

`
function ByCategory({category}){
    return (
    <Category>
        <Box>

        </Box>
        {category}

    </Category>)
}

export default ByCategory;