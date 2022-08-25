import { AnimatePresence, motion } from "framer-motion";
import { useState ,useEffect, useRef} from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { locaCateState, menuCateState } from "../atom";
import Location from "../components/Home_components/Location";
import Menu from "../components/Home_components/Menu";
import {RiArrowRightSLine, RiArrowLeftSLine} from "react-icons/ri"
import ByCategory from "../components/Home_components/ByCategory";
import All from "../components/Home_components/All";
import Footer from "../components/Home_components/Footer";

const Wrap = styled.div`
    overflow-x:hidden;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    min-height:100%;
`
const SliderWrap = styled.div`
    margin-top: 65px;
    height:325px;
    width: 100%;
`
const Slider = styled.div`
    height:280px;
    width:100%;
`
const Text = styled.div`
    font-weight: bold ;
    font-size: 24px;
    height: 50px;
    line-height:50px ;
`
const BtnSliderWrap = styled.div`
    display:grid;
    grid-template-columns:1fr 15fr 1fr ;
`
const RowWrap = styled.div`
    height: 230px;

`
const Row = styled(motion.div)`
    position:absolute;
    display:grid;
    width: 700px;
    grid-template-columns:1fr 1fr ;
    align-items:center ;
    justify-content: center ;
`
const Box = styled(motion.div)`
    height:200px;
    background-color: #F0EDFF;
    border-radius: 20px ;
    margin:10px;
`
const Bar = styled(motion.div)`
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
    height:230px;
    line-height:230px;
    font-size:30px;
    color:${(props)=> props.theme.pointColor} ;

`
const Next = styled(Prev)`
`

const Tabs = styled.div`
    display: flex ;
    p {
       border-right:1px solid #B6B6B6; 
    }
    p:first-child {
        padding-left:0;
    }
    p:last-child {
        border:none;
    }

`
const Tab = styled.p`
    font-weight: bold ;
    padding-right: 20px;
    padding-left:20px ;
    
`

const rowVariants = {
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

    const allMatch = useMatch("home/all");
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
    <div style={{width:"100%", minHeight:"100%",display:"flex", flexDirection:"column"}}>
        <Wrap>
        <SliderWrap>
            <Text>오늘은 이거 어때요?</Text>
            <Slider>
                <BtnSliderWrap>
                    <Prev onClick = {decreaseIndex} whileHover = {{scale:1.2}}><RiArrowLeftSLine/></Prev>
                <AnimatePresence custom = {back} initial = {false} onExitComplete={toggleLeaving}>
                <RowWrap>
                    <Row 
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                custom = {back}
                key = {index}
                drag = "x"
                dragSnapToOrigin
                dragConstraints = {{left:-100, right:100}}
                onDragEnd={
                    (e, info) => {
                        if (info.point.x <= 500 ) {
                            setBack(false);
                            setIndex((prev) => (prev === 2 ? 0 : prev + 1));
                        }
                        if (info.point.x >= 800){
                            setBack(true);
                            setIndex((prev) => (prev === 0 ? 2 :prev -1 ));
                        }
                    }

                    }
                >
                    {[1,2,3,4,5,6].slice(offset * index, offset * index + offset)
                    .map(i =>
                    <Box >
                        뭔가를 넣을겁니다{i}
                    </Box>)}
                </Row>
                </RowWrap>
                </AnimatePresence>
                <Next onClick = {increaseIndex} whileHover = {{scale:1.2}}><RiArrowRightSLine/></Next>
                </BtnSliderWrap>
                <Bar>
                    {[1,2,3].map(i => <Circle num = {i-1} index = {index}/>)}
                </Bar>
            </Slider>
            
        </SliderWrap>
        
        
        <Tabs>
            <Tab isActive={allMatch !== null} onClick={()=>onClick()}>
                <Link to={allMatch|| menuMatch || locaMatch || locaCateMatch || menuCateMatch ? "all":"home/all"} >전체</Link>
            </Tab>
            <Tab isActive={locaMatch !== null} onClick={()=>onClick()}>
                <Link to={allMatch|| menuMatch || locaMatch || locaCateMatch || menuCateMatch ? "location":"home/location"} >위치별</Link>
            </Tab>
            <Tab isActive={menuMatch !== null} onClick={()=>onClick()}>
                <Link to={allMatch||  menuMatch || locaMatch || locaCateMatch || menuCateMatch ? "menu":"home/menu"}>메뉴별</Link>
            </Tab>
        </Tabs>
        </Wrap>
         
        <Routes>
            <Route path = "/all" element = {<All/>}/>
            <Route path = "/location/*" element={<Location/>}/>
            <Route path = "/menu/*" element={<Menu/>}/>
        </Routes>
        <Footer/>
    </div>
    
    
        
    )
}

export default Home;