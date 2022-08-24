import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Stack, Container } from "react-bootstrap";
import "./Detail.css";
const { kakao } = window;

const Wrap = styled.div`
  position: relative;
  width: 95%;
  height: 72vh;
  margin: 0 auto;
  top: 80px;
`;

const MenuContainer = styled.div`
  background: white;
`;
const Box = styled.div`
  margin: 5px;
  border: 1px solid #ececec;
  border-radius: 3px;
`;
const Img = styled.div`
  background-color: #f0edff;
  height: 250px;
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

const MapCard = styled.div`
  padding: 1rem;
  margin: 1.75rem;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  color: white;
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
  //kakaoMapScript
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.62197524055062, 127.16017523675508),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.62197524055062,
      127.16017523675508
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <div>
      <Wrap>
        <Row>
          <Col>
            <Box>
              <Img></Img>
              <Restaurant>
                <span>name</span>
                <span></span>
              </Restaurant>
              <Hashtags></Hashtags>
            </Box>
          </Col>
          <Col>
            <Stack gap={3}>
              <Title>가게 이름</Title>
              <div>가게 소개</div>
              <Location>가게 주소</Location>
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

        <MenuContainer>
          <div>
            <h1>대표 메뉴</h1>
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
        </MenuContainer>
      </Wrap>
    </div>
  );
}

export default Detail;
