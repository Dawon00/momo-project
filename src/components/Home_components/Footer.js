import styled from "styled-components";
import {IoMdLink} from 'react-icons/io'

const Foot = styled.footer`
    background-color: #140065;
    height: 160px;
    padding: 10px 0 0 30px;
    padding-top:10px;
    position: absolute;
    bottom: 0;
    background-color: #140065;
    color: white;
`
const Col = styled.div`
    display: grid ;
    height: 100px;
    grid-template-columns: 1fr 4fr;
    margin-bottom:10px ;
`
const Logo = styled.div`
    font-weight: bold ;
    font-size: 25px;
    display: grid;
    color:white;
    align-content: center;
    
    span:last-child {
        color:  #BDADFF;
    }
`
const TeamInfoWrap = styled.div`
    display:grid;
    grid-template-columns: 2fr 2fr 1fr;
`
const TeamInfoItem = styled.div`
    display:grid;
    align-content: center;
    div {
        margin-top:10px;
        span{
            display:grid;
        }
    }
`
const GithubLink = styled.span`
    background-color: #D9D9D9 ;
    color: #140065;
    font-size:40px ;
    height: 50px;
    width:50px;
    align-items:center;
    justify-content: center ;
    border-radius:50px ;
`
const CopyRight = styled.div`
    display:grid;
`
const Title = styled.span`
    font-weight: bold ;
    font-size:20px;
    
`
function Footer(){
    return(
        <Foot>
            <Col>
                <Logo>
                    <span>모현에서</span>
                    <span>모먹지</span>
                </Logo>
                <TeamInfoWrap>
                    <TeamInfoItem>
                        <Title>About Us</Title>
                        <div>
                            <span>한국외대 근처의 모현 맛집을</span>
                            <span>모아볼 수 있는 서비스입니다</span>
                        </div>
                    </TeamInfoItem>
                    <TeamInfoItem>
                        <Title>Contact US</Title>
                        <div>
                        <span>Team : Kim Ju Won</span>
                            <span>Member : 김민서 서다원 조주희</span> 
                        </div>
                    </TeamInfoItem>
                    <TeamInfoItem>
                        <Title>Github</Title>
                        <div>
                            <GithubLink><IoMdLink/></GithubLink>
                        </div>
                    </TeamInfoItem>
                </TeamInfoWrap>
            </Col>
            
            <CopyRight>
                <span>© 2022 모현에서 모먹지 All Rights Reserved.</span>
            </CopyRight>
        </Foot>
    )
}

export default Footer;