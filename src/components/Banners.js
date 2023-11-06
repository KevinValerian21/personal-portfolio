import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import video1 from "../assets/videos/video 1.mp4";
import video2 from "../assets/videos/video 3.mp4";
import video3 from "../assets/videos/video 2.mp4";
import video4 from "../assets/videos/video 4.mp4";
import video5 from "../assets/videos/video 5.mp4";
import video6 from "../assets/videos/video 6.mp4";
import image1 from "../assets/img/doc/img1.jpeg";
import image2 from "../assets/img/doc/img2.jpeg";
import image3 from "../assets/img/doc/img3.jpeg";
import image4 from "../assets/img/doc/img4.jpeg";
import image5 from "../assets/img/doc/img5.jpeg";
import image7 from "../assets/img/doc/img7.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banners = () => {
  const [currentMedia, setCurrentMedia] = useState(null);

  
  const videoList = [
        { type: "video", src: video5, poster: image5},
    { type: "video", src: video4,  poster: image2},
    { type: "video", src: video1 },
];

  const imageList = [
    { type: "image", src: image1 },
    { type: "image", src: image2 },
    { type: "image", src: image3 },
    { type: "image", src: image4 },
    { type: "image", src: image5 },
  ];

  const handleMediaClick = (media) => {
    setCurrentMedia(media);
  };

  return (
    <section className="banner" id="home">
      <Container>
      <Col id="layar">
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <video controls width="100%">
                      <source src={video2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </Col>

        <Col>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <video controls width="100%">
                      <source src={video3} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <video controls width="100%" poster={image7}>
                      <source src={video6} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </Col>
                <Col id="videos">
                    <Row>
                        {videoList.map((media, index) => (
                        <Col key={index} xs={12} md={12} lg={12}>
                        <div
                            className="media-item"
                            onClick={() => handleMediaClick(media)}
                        >
                            <video controls width="100%"  poster={media.poster}>
                            <source src={media.src} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                        </Col>
                        ))}
                    </Row>
                    
                </Col>
            </Row>
        </Col>

      </Container>
    </section>
  );
}