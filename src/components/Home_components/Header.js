import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import {FiBookmark, FiUser} from 'react-icons/fi'
import {locaCateState, menuCateState,userStoredList } from '../../atom';
import { useRecoilValue,useSetRecoilState} from 'recoil';

const Nav = styled.nav`
    position:fixed;
    top:0;
    height: 65px;
    display: flex;
    padding:3px 0 3px 0;
    width: 844px;
    border-bottom:1px solid ${(props) => props.theme.pointBackColor};
    z-index: 10;
    background-color:white;
`
const Col = styled.div`
    display: flex;
    align-items: center;

`
const Logo = styled.div`
    a {
        font-weight: bold ;
        font-size: 25px;
        margin-left: 30px;
        display: grid;
        width: 130px;
        cursor: pointer;
        color: black;
        span:last-child {
        color: ${(props) => props.theme.pointColor}
    }
}
    
`
const Search = styled.form`
    background-color: ${(props) => props.theme.pointBackColor};
    height: 40px;
    line-height: 20px ;
    border-radius:10px ;
    padding: 10px;
    color: grey;
    button {
        color: grey;
        font-size:15px;
        cursor:pointer;
    }
`
const Input = styled.input`
    outline : none;
    border:none;
    background-color:rgba(0,0,0,0);
`
const Items = styled.div`
    position:absolute;
    right:0;
    display:flex;
    margin-right:30px;
`
const Item = styled.div`
    margin:4px;
`
const Welcome = styled.div`
    height:50px;
    line-height:50px;
    margin-right:20px;
    font-size:12px;
    span:nth-child(2){
        font-weight:bold ;
        font-size:20px;
    }
`
const Bookmark = styled.div`
    width:50px;
    height:50px;
    background-color:#F0EDFF;
    color: ${(props) => props.theme.pointColor};
    border-radius:10px ;
    font-size: 30px;
    display: flex;
    align-items:center;
    justify-content: center;
`
const Profile = styled(Bookmark)`
    background-color:#F5F5F5;
    color:#838383;
`

function Header(){
    const name = useRecoilValue(userStoredList);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onValid = (data) => {
        navigate(`/search?keyword=${data.keyword}`)
    }

    const setLocaCategory = useSetRecoilState(locaCateState);
    const setMenuCategory = useSetRecoilState(menuCateState);
    const onClick = () => {
        setLocaCategory("");
        setMenuCategory("");
    }
 return (
    <>
        <Nav>
            <Col>
                <Logo onClick = {()=>onClick()}>
                    <Link to ="/home/all">
                        <span>모현에서</span>
                        <span>모먹지</span>
                    </Link>
                </Logo>
                <Search
                onSubmit= {handleSubmit(onValid)}>
                    <Input 
                        {...register("keyword", { required: true, minLength: 2 })}
                        placeholder='search'
                     />

                    <button>
                        🔍︎
                    </button>    
                </Search>
            </Col>
            <Col>
               <Items>
                <Item>
                    <Welcome>
                        <span>반가워요,</span>
                        <span>{name}</span>
                        <span>님!</span>
                    </Welcome>
                </Item>
                <Item>
                    <Link to = "/bookmark">
                        <Bookmark >
                            <FiBookmark/>
                        </Bookmark>
                    </Link>
                </Item>
                <Item>
                    <Link to = "/profile">
                        <Profile >
                            <FiUser/>
                        </Profile>
                    </Link>
                </Item>
                </Items> 
            </Col>
            
        </Nav>
    </>
 )
}

export default Header;