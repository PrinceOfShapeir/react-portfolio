import React, {Component} from 'react';
import { OverlayTrigger,Tooltip, Row, Col, Figure, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
let baseUrl = process.env.PUBLIC_URL; //does NOT include "/"

class Home extends Component{
    componentDidMount(){
        //something
    }

    render() {

        return (

                <div  className="mx-auto text-center">
                    
                    <h1>About</h1>

                    <p>My name is Sean Farley. I am a full stack developer.</p>
                    <Row>
                        <Col s={0} m={2}></Col>
                        <Col s={12} m={8}>
                        
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
                                         src={baseUrl + "/logo512.png"}        
                                        />
                                        <Figure.Caption>
                                            React Projects
                                        </Figure.Caption>
                                    </Figure>
                                </a>
                        </OverlayTrigger>
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
                        <Col s={0} m={2}></Col>
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
                    

                   
                </div>

        );
}
}



export default Home;
