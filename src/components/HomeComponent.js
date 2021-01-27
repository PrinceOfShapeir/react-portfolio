import React, {Component} from 'react';
import { OverlayTrigger,Tooltip, Row, Col, Figure, Container, ProgressBar, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'react-router-dom';
import {RiLinkedinBoxFill, RiGithubLine} from 'react-icons/ri';
import 'animate.css/animate.min.css';
let baseUrl = process.env.PUBLIC_URL; //does NOT include "/"


class Home extends Component{
    componentDidMount(){
        //something
    }

    render() {

        return (

                <div  className="mx-0 text-center bg-primary">
                    <ProgressBar striped variant="primary" now={100}/>
                    <h1 className="bg-primary animate__animated animate__fadeInDown" style={{color: '#ebc21d'}}>About</h1>
                    <ProgressBar striped variant="primary" now={100}/>

                    <Container fluid className="bg-muted">
                        
                        <Row>
                        <Col s={0} m={2} style={{
                            background: 'linear-gradient(0deg, rgba(226,225,223,1) 0%, rgba(222,225,224,1) 56%, rgba(0,134,255,1) 100%)'
                        }} className="animate__animated animate__fadeInRight"></Col>
                        <Col xs={12} s="auto" md="10" className="bg-dark text-light animate__animated animate__fadeIn ">

                            
                            <br />
                            <p>   Hi, my name is Sean. I am a full stack developer and bootcamp graduate. My recent projects are built upon the MERN (Mongo, React, Express, Native) stack.</p>
                            <p>My interests include gaming, science fiction, and artificial intelligence. In my spare time you can find me reading articles on machine learning and or watching Stargate SG-1.</p>

                            
                            <p>For professional inquiries, contact me on  <a href="https://www.linkedin.com/in/sean-farley/">Linked<RiLinkedinBoxFill /></a></p>
                            <p>To collaborate or for technicial discussion, please follow me on <a href="https://github.com/PrinceOfShapeir">GitHub<RiGithubLine /></a></p>
                            <OverlayTrigger
                                    
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id={`tooltip1`}>
                                        Click here to view the Projects page.
                                        </Tooltip>
                                    }
                                >
                                <a href={baseUrl + "/projects"}>

                                    <Figure className="animate__animated animate__fadeInUp">
                                        <Figure.Image 
                                        alt="logo512.png"
                                         src={baseUrl + "/logo512.png"}        
                                        />
                                        <Figure.Caption>
                                            React Projects
                                        </Figure.Caption>
                                    </Figure>
                                </a>
                        </OverlayTrigger>

                        {/*
                        <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id={`tooltip1`}>
                                        Click here to view the Projects page.
                                        </Tooltip>
                                    }
                                >
                                <a href={baseUrl + "/projects"}>

                                    <Figure>
                                        <Figure.Image 
                                        alt="logo512.png"
                                        src={baseUrl + "/nodeLogo.png"}        
                                        />
                                        <Figure.Caption>
                                            Code Samples
                                        </Figure.Caption>
                                    </Figure>
                                </a>
                                </OverlayTrigger>
                                
                                */}

                                
                        <>
                                {/*
                           
                        <Carousel>
                            <Carousel.Item>
                                
                                <a href={baseUrl + "/projects"}>
                                    <img
                                    className="d-block w-100 bg-dark"
                                    src={baseUrl + "/logo512.png"}
                                    alt="First slide"
                                    />
                                     </a>
                                    <Carousel.Caption>
                                    <p>See my projects!</p>
                                </Carousel.Caption>
                               

                            </Carousel.Item>

                            <Carousel.Item>

                                    <a href={baseUrl + "/projects"}>
                                        <img
                                        className="d-block w-100 bg-dark"
                                        src={baseUrl + "/nodeLogo.png"}
                                        alt="Second slide"/>
                                        </a>
                                     <Carousel.Caption>
                                        
                                        <p>Code that runs.</p>
                                    </Carousel.Caption>
                                    
                               
                                
                                

                            </Carousel.Item>
                                </Carousel>*/}</>
                        </Col>
                        <Col s={0} m={2} style={{
                            background: 'linear-gradient(0deg, rgba(226,225,223,1) 0%, rgba(222,225,224,1) 80%, rgba(0,134,255,1) 100%)'
                        }} className="animate__animated animate__fadeInLeft "></Col>
                    </Row>

                                {/*
                   <Figure>
                        <Figure.Image 
                        alt="nodeLogo.png"
                        src={baseUrl + "/nodeLogo.png"  }         
                        />
                        <Figure.Caption>
                            Test Figure.
                        </Figure.Caption>
                    </Figure>
                                */}
                    

                   </Container>
                </div>

        );
}
}



export default Home;
