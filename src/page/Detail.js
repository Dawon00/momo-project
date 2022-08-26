import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Stack, Container } from "react-bootstrap";
import "./Detail.css";
import Footer from "../components/Home_components/Footer";
import { db } from ".././Firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const { kakao } = window;

const AllWrap = styled.div`
  height: 100%;
`;
const Wrap = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
  top: 80px;
  min-height: 100vh;
`;

const MenuContainer = styled.div`
  background: white;
  margin-bottom: 150px;
`;
const Box = styled.div`
  margin: 5px;
  border: 1px solid #ececec;
  border-radius: 3px;
`;
const Img = styled.div`
  background-color: #f0edff;
  height: 250px;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;

const Restaurant = styled.div`
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  span:first-child {
    font-weight: bold;
    font-size: 20px;
  }
  span:last-child {
    cursor: pointer;
    font-size: 25px;
    color: ${(props) => props.theme.pointColor};
  }
`;

const Location = styled.h3`
  font-weight: bold;
`;

const MenuTitle = styled.h1`
  font-weight: bold;
  font-size: large;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const MapCard = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 50px;
  margin-top: 30px;
`;

const Hashtags = styled.div`
  margin: 10px 10px 20px 10px;
  span {
    border-radius: 10px;
    background-color: #ececec;
    padding: 5px;
    margin-right: 10px;
    color: #6d6d6d;
  }
`;

function Detail() {
  //const [data, setData] = useState([]);
  const { id } = useParams();
  const jsonData = require("../components/api_components/Api.json");
  let item = jsonData.apiList.filter((x) => x.key === Number(id));
  console.log(item);

  //function getData() {
  ////  const dataCollectionRef = collection(db, "apiList");
  //  getDocs(dataCollectionRef)
  //    .then((response) => {
  //      const newdata = response.docs.map((doc) => ({
  //        data: doc.data(),
  //        id: doc.id,
  //      }));
  //      setData(newdata);
  //    })
  //    .catch((error) => console.log(error.message));
  //}
  useEffect(() => {
    //kakaoMap
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(item[0].Latitude, item[0].Longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      item[0].Latitude,
      item[0].Longitude
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <AllWrap>
      <Wrap>
        <Row>
          <Col>
            <Box>
              <Img url={item[0].photoUrl}></Img>
              <Restaurant>
                <span>{item[0].name}</span>
                <span></span>
              </Restaurant>
              <Hashtags>
                {item[0].bCategory ? <span>{item[0].bCategory}</span> : null}
                {item[0].bLocation ? <span>{item[0].bLocation}</span> : null}
                {item[0].hastag ? <span>{item[0].hastag}</span> : null}
              </Hashtags>
            </Box>
          </Col>
          <Col>
            <Stack gap={3}>
              <div>
                <Title>{item[0].name}</Title>
              </div>
              <Location>{item[0].sLocation}</Location>
            </Stack>
          </Col>
        </Row>

        <MapCard>
          <div
            id="myMap"
            style={{
              width: "100%",
              height: "250px",
            }}
          ></div>
        </MapCard>

        {/* <MenuContainer>
          <div>
            <MenuTitle>대표 메뉴</MenuTitle>
          </div>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    width="50%"
                  />
                  <Card.Body>
                    <Card.Title>메뉴이름</Card.Title>
                    <Card.Text>메뉴 가격</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </MenuContainer> */}
      </Wrap>
      <Footer />
    </AllWrap>
  );
}

export default Detail;
