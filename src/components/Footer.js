import styled from "styled-components";

const Foot = styled.footer`
    background-color: #140065;
    height: 160px;
    padding:20px 0 20px 0;
`
const Logo = styled.div`
    font-weight: bold ;
    font-size: 25px;
    display: grid;
    width: 130px;
    color:white;
    margin-left: 30px;
    span:last-child {
        color: ${(props) => props.theme.pointBackColor};
    }
`
const About = styled.div`

`
const Contact = styled.div`

`
const Github = styled.div`

`
const CopyRight = styled.div`

`
function Footer(){
    return(
        <Foot>
            <Logo>
                <span>모현에서</span>
                <span>모먹지</span>
            </Logo>
            <About>

            </About>
            <Contact>

            </Contact>
            <Github>

            </Github>
            <CopyRight>

            </CopyRight>
        </Foot>
    )
}

export default Footer;