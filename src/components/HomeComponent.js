import React, {Component} from 'react';
import { OverlayTrigger,Tooltip, Carousel, Row, Col} from 'react-bootstrap';
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
                        <Carousel>
                            <Carousel.Item>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id={`tooltip`}>
                                        Click here to view the Projects page.
                                        </Tooltip>
                                    }
                                >
                                <a href="/projects">
                                    <img
                                    className="d-block w-100 bg-dark"
                                    src="logo512.png"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 className="carousel-head">React Projects</h3>
                                    <p>See my projects!</p>
                                </Carousel.Caption>
                                </a>
                                    </OverlayTrigger>

                            </Carousel.Item>

                            <Carousel.Item>

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id={`tooltip`}>
                                        Code projects that don't require a frontend.
                                        </Tooltip>
                                    }
                                >       
                                    <a href="/projects">
                                        <img
                                        className="d-block w-100 bg-dark"
                                        src="nodeLogo.png"
                                        alt="Second slide"/>
                                     <Carousel.Caption>
                                        <h3 className="carousel-head">Code Samples</h3>
                                        <p>Code that runs.</p>
                                    </Carousel.Caption>
                                    </a>
                                </OverlayTrigger>
                                
                                

                            </Carousel.Item>
                        </Carousel>
                        </Col>
                        <Col s={0} m={2}></Col>
                    </Row>


                   
                    

                   
                </div>

        );
}
}



export default Home;
