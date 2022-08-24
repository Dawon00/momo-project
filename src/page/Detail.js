import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { Card, Col, Row, Stack, Container } from "react-bootstrap";
import { throttle } from "lodash";

import "./Detail.css";

const storeList = [
  { name: "CU", location: [37.565964, 126.986574] },
  { name: "할리스", location: [37.564431, 126.986591] },
  { name: "세븐일레븐", location: [37.565188, 126.983238] },
  { name: "파리바게트", location: [37.564869, 126.98445] },
  { name: "스타벅스", location: [37.562003, 126.985829] },
];

//accessToken
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF3b24wMCIsImEiOiJjbDc2cnRlZWMwbWtrM3Z0ODE5N2x4MHRtIn0.AVW7DpQUCvpw_CoeIWsDXA";

const Wrap = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 95%;
  margin: 0 auto;
  top: 80px;
`;

const MenuContainer = styled.div`
  background: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Location = styled.h3`
  font-weight: bold;
`;

function Detail() {
  //location
  const [viewport, setViewport] = useState({
    latitude: 37.5326,
    longitude: 127.024612,
    width: "100vw",
    height: "100vh",
    zoom: 17,
  });
  useEffect(() => {
    const mapResizeEvent = throttle(() => {
      setViewport(
        Object.assign(
          {},
          {
            ...viewport,
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
          }
        )
      );
    }, 2000);
    window.addEventListener("resize", mapResizeEvent);
    return () => {
      window.removeEventListener("resize", mapResizeEvent);
    };
  }, [viewport]);

  return (
    <div>
      <Wrap>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://codingapple1.github.io/shop/shoes1.jpg"
              />
              <Card.Body>
                <Card.Title>가게 이름</Card.Title>
                <Card.Text>태그 위치</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Stack gap={3}>
              <Title>가게 이름</Title>
              <div>가게 소개</div>
              <Location>가게 주소</Location>
            </Stack>
          </Col>
        </Row>
      </Wrap>

      <div className="Mapbox">
        <ReactMapGL
          {...viewport}
          transitionDuration={800}
          mapboxApiAccessToken={mapboxgl.accessToken}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <div className="navi-control">
            <NavigationControl />
          </div>
          {storeList.map((store, i) => (
            <Marker
              key={i}
              latitude={store.location[0]}
              longitude={store.location[1]}
            >
              {" "}
              <button className="btn-marker" />{" "}
            </Marker>
          ))}
        </ReactMapGL>
      </div>

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
    </div>
  );
}

export default Detail;
