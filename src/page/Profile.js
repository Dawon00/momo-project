import { useRecoilState} from "recoil";
import {userStoredList} from '../atom';
import styled from "styled-components";

const Wrap = styled.div`
    overflow-x:hidden;
    position: relative;
    width: 95%;
    margin: 0 auto;
    top:80px;
    height: 72vh;
    bottom: 160px;
`

const Profile = ()=>{
 const [userName, setUserName] = useRecoilState(userStoredList);
  console.log(userName);
  return(
    <Wrap>
      성함을 입력해주세요 
      <input
      value ={userName}
      onChange={(e)=>{
        setUserName(e.target.value);
      }
      }
      />
    </Wrap>
    
  );
};


export default Profile;