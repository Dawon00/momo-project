import { useRecoilState} from "recoil";
import { useEffect } from "react";
import {userStoredList} from '../atom';
import Footer from "../components/Home_components/Footer";
import Header from "../components/Home_components/Header";

export const localStorageEffect = (key) => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
    //   setSelf(JSON.parse(savedValue));
        localStorage.removeItem(key);
    }
    onSet((newValue, _, isReset) => {
        const confirm = newValue.length === 0;
        confirm ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const Profile = ()=>{
 const [userList, setUserList] = useRecoilState(userStoredList);

  useEffect(() => {
    setUserList([
      {
        name: "Keane Sykes",
      },
    ]);
  }, []);
  console.log(userList);
  return(
    <div>
    </div>
    
  );
};


export default Profile;