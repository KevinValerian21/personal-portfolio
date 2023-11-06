/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import projImg1 from "../assets/img/pict/project-img1.png";
import projImg2 from "../assets/img/pict/project-img2.jpeg";
import projImg3 from "../assets/img/pict/project-img3.png";
import projImg4 from "../assets/img/pict/project-img4.jpg";
import projImg5 from "../assets/img/pict/project-img5.png";
import projImg6 from "../assets/img/pict/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Certificates } from "./Certificates";
import { Library } from "./Library";


export const Projects = () =>{

    const projects = [
        {
            title: "Prediction of Crypto Ethereum",
            description: "Machine Learning",
            imgUrl: projImg1,
            link: 'https://github.com/KevinValerian21/Prediksi-Ethereum/blob/main/ITB04_Assignment%20Tugas%20Akhir%204_Kelompok%204.ipynb'
        },
        {
            title: "The Most Expensive Export Commodity of Indonesian Marine Products",
            description: "Data Science",
            imgUrl: projImg2,
            link: "https://github.com/KevinValerian21/Komoditas-Ekspor-Termahal-Hasil-Laut-Indonesia/blob/main/Komoditas%20Ekspor%20Termahal%20dari%20Hasil%20Laut%20Indonesia.ipynb"
        },
        {
            title: "Microcredential Associate Data Scientist Training 2021 with KKNI 6 standards",
            description: "Data Science",
            imgUrl: projImg3,
            link:"https://github.com/KevinValerian21/Microcredential-Pelatihan-Associate-Data-Scientist-2021"
        },
        {
            title: "DSDA Practicum",
            description: "Data Science",
            imgUrl: projImg4,
            link:"https://github.com/KevinValerian21/Praktikum-Data-Science-and-Data-Analytics"
        },
        {
            title: "Movie Recommendation System",
            description: "DQLab Course",
            imgUrl: projImg5,
            link:"https://github.com/KevinValerian21/Project-Machine-Learning-with-Python-Building-Recommender-System"
        },
        {
            title: "Loan Classification Analysis for the UMKM Sector",
            description: "DQLab Course",
            imgUrl: projImg6,
            link:"https://github.com/KevinValerian21/Project-Analisa-Klasifikasi-Pinjaman-untuk-Sektor-UMKM-"
        },
    ];

    const certifs = [
        {
            title: "CERTIFICATE OF EXCELLENCE",
            description: "Membuat Visualisasi Data Menarik dengan Tableau",
            imgUrl: 'https://img-certificate.ruangguru.com/KEVIN9V1S5BC6Q0A/CERT-K1KAKLJ8.jpg',
            link: 'https://img-certificate.ruangguru.com/KEVIN9V1S5BC6Q0A/CERT-K1KAKLJ8.jpg'
        },
        {
            title: "CERTIFICATE OF COMPLETION",
            description: "Membuat Visualisasi Data Menarik dengan Tableau",
            imgUrl: 'https://img-certificate.ruangguru.com/KEVIN9V1S5BC6Q0A/CERT-EWVUO2EW.jpg',
            link: "https://img-certificate.ruangguru.com/KEVIN9V1S5BC6Q0A/CERT-EWVUO2EW.jpg"
        }, 

        {
            title: "CERTIFICATE OF ATTAINMENT",
            description: "Microcredential Certification Associate Data Scientist",
            imgUrl: 'https://kevinvalerian21.github.io/static/MyCertifs/Microcredential%20Certification-Kevin%20Valerian%20Ninia_page-0001.jpg',
            link: 'https://kevinvalerian21.github.io/static/MyCertifs/Microcredential%20Certification-Kevin%20Valerian%20Ninia_page-0001.jpg'
        }, 
        {
            title: "CERTIFICATE OF COMPLETION",
            description: "Microcredential Certification Associate Data Scientist",
            imgUrl: 'https://kevinvalerian21.github.io/static/MyCertifs/Microcredential%20Certification-Kevin%20Valerian%20Ninia_page-0002.jpg',
            link: 'https://kevinvalerian21.github.io/static/MyCertifs/Microcredential%20Certification-Kevin%20Valerian%20Ninia_page-0002.jpg'
        }, 
        {
            title: "CERTIFICATE OF COMPLETION",
            description: "Membuat Visualisasi Data Menarik dengan Tableau",
            imgUrl: 'https://kevinvalerian21.github.io/static/sertif%20dqlbab/SertifikatExcelAnalytics.png',
            link: "https://kevinvalerian21.github.io/static/sertif%20dqlbab/SertifikatExcelAnalytics.png"
        }, 

        
    ];

    const books = [
        {
            title: "ATOMIC HABITS",
            description: "Books by: James Clear",
            imgUrl: 'https://kevinvalerian21.github.io/static/MyCertifs/books1.jpg',
            link: 'https://kevinvalerian21.github.io/static/MyCertifs/books1.jpg'
        },
        {
            title: "THE PSYCHOLOGY OF MONEY",
            description: "Books by: Morgan Housel",
            imgUrl: 'https://eglobuss.lv/storage/attachments/4f7/g53/u81/4f7g53u81lspyx4sx2vq9navn.jpg',
            link: 'https://bookbins.in/wp-content/uploads/2021/05/The-Psychology-Of-Money-Morgan-Housel-Buy-Online-Bookbins-1.png'
        },
        {
            title: "THE KREMLIN SCHOOL OF NEGOTIATION",
            description: "Books by: Igor Ryzov",
            imgUrl: 'https://cdn.gramedia.com/uploads/picture_meta/2023/4/9/rdsdebjng4maexpynmja6c.jpg',
            link: 'https://www.gramedia.com/products/the-kremlin-school-of-negotiation'
        }, 
        {
            title: "LEADERSHIP",
            description: "Vice Leader Tribe of The Complete Intern Batch 2 CIMB Niaga",
            imgUrl: 'https://kevinvalerian21.github.io/static/MyCertifs/Certificate Vice Leader-CIMB Niaga.jpg',
            link: 'https://kevinvalerian21.github.io/static/MyCertifs/Microcredential%20Certification-Kevin%20Valerian%20Ninia_page-0002.jpg'
        }, 
    ];

    return(
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Portfolio</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Certificates</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Self Improvement</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                    certifs.map((certifs, index) => {
                                        return (
                                        <Certificates
                                            key={index}
                                            {...certifs}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                    books.map((books, index) => {
                                        return (
                                        <Library
                                            key={index}
                                            {...books}
                                            />
                                        )
                                    })
                                    }
                                </Row>                            
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}