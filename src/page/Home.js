import { AnimatePresence, motion } from "framer-motion";
import { useState ,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
    padding-top: 80px;
    overflow:hidden;
    position: relative;
    height: 890px;
    width: 95%;
    margin: 0 auto;
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
    top:130px;
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
    top: 350px;
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
const Category = styled.div`

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

    useEffect(()=> {
        const loop = setInterval(() => {
            setIndex(prev => prev === 2? 0 : prev + 1);
        },7000)
        console.log(index)
        return () => {
            clearInterval(loop);
        };
    },[index])

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
    </Wrap>
        
    )
}

export default Home;