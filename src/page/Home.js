import { AnimatePresence, motion } from "framer-motion";
import { useState ,useEffect} from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, locaCateState, menuCateState } from "../atom";
import Location from "../components/Home_components/Location";
import Menu from "../components/Home_components/Menu";

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
    width:380px;
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
const Tabs = styled.div`
    position: absolute;
    top: 350px;
    display: flex ;
`
const Tab = styled.p`
    font-weight: bold ;

`

const boxVariants = {
    hidden: {
        x: 844,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -844,
    },
  };

const offset = 2;
function Home(){
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const toggleLeaving = () => setLeaving((prev) => !prev);

    const locaMatch = useMatch("home/location");
    const menuMatch = useMatch("home/menu");

    const [locaCategory, setLocaCategory] = useRecoilState(locaCateState);
    const [menuCategory, setmenuCategory] = useRecoilState(menuCateState);
    const locaCateMatch = useMatch(`home/location/${locaCategory}` )
    const menuCateMatch = useMatch(`home/menu/${menuCategory}`)

    useEffect(()=> {
        const loop = setInterval(() => {
            setIndex(prev => prev === 2? 0 : prev + 1);
        },7000)
        return () => {
            clearInterval(loop);
        };
    },[])

    const onClick = () => {
        setLocaCategory("");
        setmenuCategory("");
    }

    return (
    <Wrap>
        <Slider>
            <Text>오늘은 이거 어때요?</Text>
            <AnimatePresence initial = {false} onExitComplete={toggleLeaving}>
            <Row 
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key = {index}
            >
                {[1,2,3,4,5,6].slice(offset * index, offset * index + offset)
                .map(i =>
                <Box >
                    뭔가를 넣을겁니다{i}
                </Box>)}
            
            </Row>
            <Bar>
                <Circle num = {0} index = {index} />
                <Circle num = {1} index = {index} />
                <Circle num = {2} index = {index} />
            </Bar>
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