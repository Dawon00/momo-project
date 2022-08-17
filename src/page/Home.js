import { AnimatePresence, motion } from "framer-motion";
import { useState ,useEffect} from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { locaCateState, menuCateState } from "../atom";
import Location from "../components/Home_components/Location";
import Menu from "../components/Home_components/Menu";
import {RiArrowRightSLine, RiArrowLeftSLine} from "react-icons/ri"

const Wrap = styled.div`
    overflow-x:hidden;
    position: relative;
    width: 95%;
    margin: 0 auto;
    top:80px;
    height: 650px;
    bottom: 160px;
`
const Slider = styled.div`
    height: 300px;
`
const Text = styled.div`
    font-weight: bold ;
    font-size: 24px;
    height: 50px;
    line-height:50px ;
`
const Row = styled(motion.div)`
    display:flex;
    position: absolute;
    top:50px;
    width: 100%;
    align-items:center ;
    justify-content: center ;
`
const Box = styled(motion.div)`
    height:200px;
    width:350px;
    background-color: #F0EDFF;
    border-radius: 20px ;
    margin:10px;
`
const Bar = styled(motion.div)`
    position: absolute;
    top: 280px;
    display: flex;
    width: 100%;
    align-items:center ;
    justify-content: center ;
`
const Circle = styled(motion.div)`
    height: 13px;
    width:13px;
    border-radius:50px ;
    background-color: ${(props)=> props.num === props.index ? props.theme.pointColor : "#B6B6B6"} ;
    margin: 10px;
`
const Prev = styled(motion.button)`
    font-size:30px;
    position: absolute ;
    height:200px;
    line-height:200px;
    top:50;
    color:${(props)=> props.theme.pointColor} ;

`
const Next = styled(Prev)`
    right:0;
`

const Tabs = styled.div`
    position: absolute;
    top: 350px;
    display: flex ;
`
const Tab = styled.p`
    font-weight: bold ;

`

const boxVariants = {
    hidden: (back)=> ({
      x: back ? -844 :  844,
    }),
    visible: {
      x: 0,
    },
    exit:(back)=> ( {
      x: back ? 844 :  -844,
    }),
  };

const offset = 2;
function Home(){
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const [back, setBack] = useState(false);

    const toggleLeaving = () => setLeaving((prev) => !prev);

    const locaMatch = useMatch("home/location");
    const menuMatch = useMatch("home/menu");

    const [locaCategory, setLocaCategory] = useRecoilState(locaCateState);
    const [menuCategory, setmenuCategory] = useRecoilState(menuCateState);
    const locaCateMatch = useMatch(`home/location/${locaCategory}` )
    const menuCateMatch = useMatch(`home/menu/${menuCategory}`)

   
    const onClick = () => {
        setLocaCategory("");
        setmenuCategory("");
    }


    const increaseIndex = () => {
        if (leaving) return;
        toggleLeaving();
        setBack(false);
        setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    };
    const decreaseIndex = () =>{
        if (leaving) return;
        toggleLeaving();
        setBack(true);
        setIndex((prev) => (prev === 0 ? 2 :prev -1 ));
    }

    



    return (
    <Wrap>
        <Slider>
            <Text>오늘은 이거 어때요?</Text>
            <AnimatePresence custom = {back} initial = {false} onExitComplete={toggleLeaving}>
            <Row 
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            custom = {back}
            key = {index}
            >
                {[1,2,3,4,5,6].slice(offset * index, offset * index + offset)
                .map(i =>
                <Box >
                    뭔가를 넣을겁니다{i}
                </Box>)}
            </Row>
            <Bar>
                {[1,2,3].map(i => <Circle num = {i-1} index = {index}/>)}
            </Bar>
            <Prev onClick = {decreaseIndex} whileHover = {{scale:1.2}}><RiArrowLeftSLine/></Prev>
            <Next onClick = {increaseIndex} whileHover = {{scale:1.2}}><RiArrowRightSLine/></Next>
            </AnimatePresence>
        </Slider> 
        
        <Tabs>
            <Tab isActive={locaMatch !== null} onClick={()=>onClick()}>
                <Link to={ menuMatch || locaMatch || locaCateMatch || menuCateMatch ? "location":"home/location"} style= {{paddingRight:"10px", borderRight:"solid 1.5px black"}}>위치별</Link>
            </Tab>
            <Tab isActive={menuMatch !== null} onClick={()=>onClick()}>
                <Link to={  menuMatch || locaMatch || locaCateMatch || menuCateMatch ? "menu":"home/menu"} style= {{paddingLeft:"10px", }}>메뉴별</Link>
            </Tab>
        </Tabs>

        <Routes>
            <Route path = "/location/*" element={<Location/>}/>
            <Route path = "/menu/*" element={<Menu/>}/>
        </Routes>
         
    </Wrap>
        
    )
}

export default Home;