import { useRecoilState} from "recoil";
import {userStoredList} from '../atom';
import styled from "styled-components";
import Footer from "../components/Home_components/Footer";
const Wrap = styled.div`
    height:100%;

`
const ProfileDiv = styled.div`
    margin:60px;
    min-height: 80vh;
    outline:0;
    border:0;
    overflow-y:scroll;
    overflow-y:hidden;
`
const ProfileText = styled.p `
margin:20px;

`
const ProfileResult = styled.form`
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
const ProfileInput = styled.input`
outline: none;
    background-color: inherit;
`
const Profile = ()=>{
 const [userName, setUserName] = useRecoilState(userStoredList);
  console.log(userName);
  return(
    <Wrap>
      <ProfileDiv>
        <ProfileText>
        성함을 입력해주세요 
        </ProfileText>
      <ProfileResult>
      <ProfileInput
      value ={userName}
      onChange={(e)=>{
        setUserName(e.target.value);
      }
      }
      />
      </ProfileResult>
      </ProfileDiv>
      <Footer/>
    </Wrap>
    
  );
};


export default Profile;