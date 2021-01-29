
import React from 'react';
import {Figure, Row, Col, Container, Accordion, Card} from 'react-bootstrap';
import background from '../andy-holmes-LUpDjlJv4_c-unsplash.jpg'
import 'animate.css/animate.min.css';

let baseUrl = process.env.PUBLIC_URL;
function Projects () {

    return (

        
        <div className="text-center" style={{
            backgroundImage: `url(${background})`,
            backgroundColor: "black",
            minHeight: "100vh",
            height: '100%'
        }}>
            <Container fluid>
                <Row>

                    <Col xs={0} sm={2}><a href={baseUrl + "/"} className="text-primary bg-light animate__animated animate__fadeInDown" style={{opacity: .9}}>Home</a></Col>
                    <Col xs className="bg-light fade-in" style={{
                        
                        opacity: .9}}>
                    <h1>Projects</h1>
                        <br />

                        <h3>Free Online Menu App</h3>

                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click Me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image 
                                        alt="menu.png"
                                        src={baseUrl + "/menu.png"  }         
                                        />
                                        <Figure.Caption>
                                            Here you can see the basic customer view.
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <a href="https://github.com/PrinceOfShapeir/YourRestaurant">Github Link</a>

                        <p>This is a prototype online menu interface. Store owners can display and advertise a menu. The interface allows potential customers to select items and add them to their shopping list. To complete the transaction, the shopping list is exported to a preferred contact method. No transactions are handled by the application, this allows the store owner to use their preferred in house transaction method, and keep the full proceeds thereby.</p>

                        <p>The motivation for this app was the proliferation of commission based services which can take a hefty cut of transaction proceeds in an industry where margins are slim to begin with. Smaller businesses which do not see economies of scale from using high powered solutions, could benefit from a more minimalistic approach.</p>

                        <br />
                        <h3>Phone Number Converter</h3>

                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Toggle Example 1
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image 
                                        alt="numberBefore.png"
                                        src={baseUrl + "/numberBefore.png"  }         
                                        />
                                        <Figure.Caption>
                                            Part 1
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Toggle Example 2
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image 
                                        alt="numberAfter.png"
                                        src={baseUrl + "/numberAfter.png"}
                                        />
                                        <Figure.Caption>
                                            Part 2
                                        </Figure.Caption>
                                </Figure>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>                 
                        <a href="https://github.com/PrinceOfShapeir/PhoneNumberTranslator">Github Link</a>
                        <p>Tired of phone number acronyms when you're using a nonstandard keypad? This app is here to help. Simply type in the acronym and the app tells you the 9-digit code associated with that acronym. Built with React Native.</p>
                        
                        <br />
                        <h3>Poker Hand Calculator</h3>

                        <p>Given any seven cards, return the absolute strength of that hand according to Texas Holdem rules. If multiple hands are calculated, the maximum value should correspond to the winning hand.</p>

                        <Figure>
                            <Figure.Image 
                            alt="handEvaluator.png"
                            src={baseUrl + "/handEvaluator.png"}          
                            />
                            <Figure.Caption>
                            As you can see my coding style is very Object Oriented.
                            </Figure.Caption>
                        </Figure>        
                        <a href="https://github.com/PrinceOfShapeir/PokerCalculator">Test out the source code on Github.</a>

                        <br /> 
                        <br />

                        <h3>Battletoes</h3>

                        <a href="https://battletoes.firebaseapp.com">Click Here for a Live Version</a>

                        <p>Play against a neural net and watch it learn from its mistakes. Game features persistent stat tracking as well as file upload and download. Powered by Firebase Firestore, JQuery and Express.</p>

                        <Accordion>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Toggle long winded explanation.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    <p>I have always been interested in artifical intelligence and took that perspective into this application. Most developers try to "solve" the game. Of course a solved tic-tac-toe game is no fun at all, it is a simple function of who goes first.
                                    </p>
                                    <p>To keep the game fun, I wanted to develop a bot with a personality. My goals were for the bot to generally attempt to win, and to learn from its mistakes while doing so. The first thing testers noticed was how after defeating the ai, was the ai would copy the human player's prior moves. A standard game AI would be expected to always make the same moves, regardless of prior success or failure.
                                    </p>
                                    <p>I first contructed a model using <a href="https://caza.la/synaptic/#/">Synaptic.js</a>, a framework I chose for the availability and readability of documentation. The model's logic in simplified terms corresponds to a heat map of probability densities. For the initial inputs, I generated random probabilities and fed them into the constructor. Then, I pit instances against each other in a battle royale. Some instances played better than others instinctively, by grace of their randomly assigned initial preferences. The winners would move on to the next round. Both winners and losers recieved positive reinforcement corresponding to the winning moves, and negative reinforcement corresponding the the losing moves. I used the term reinforcement to denote a shift in the probability matrix of a certain response to a certain input. I also included a memory of up to three previous turns, to allow backpropagation for positive and negative lines of play.</p>

                                    <p>Each AI was capable of analyzing a single matrice, iterating through the possible moves given that position, and returning a single normalized value (0-1) for each possible move corresponding to the bot's previous experiences and the derived genetic memory of its ancestors. The value of the returned number, as it approaches 1, determines the weighted probability of choosing that particular move. All instances have access to the core training sets, which establish victory and loss payoffs.</p>

                                    <p>Players could download their trained AI, train it offline, and upload the saved model to the browser, in which case it would stand in for the default model. Models saved and trained in this way would begin with all the traits of their default ancestor, but their tendencies could evolve independently of the base model, depending on the time invested.</p>

                                    <p><b>Limitations</b></p>
                                    <p>There were of course limitations, as my laptop began crashing, I was limited to fifty iterations per training cycle, rather than the millions generally needed to produce optimal alignment from a stochastic process. Furthermore the specific reinforcement values and training intensity are arbitrary and were not scientifically derived, although the users can download a copy of the base AI and implement their own custom training regimen. There is also the inherent limitation in that physical systems have massive advantages in paralell processing, which cannot be matched by classical computing.</p>
                                        
                                    <p>For a matter of perspective, the model plays about as well as a novice four year old human, to whom trillions of neurons are available, with a mere 20 simulated neurons. Although it is not capable of meta-cognition, the model does support simple mimicry, which is a basic strategy also employed by higher lifeforms.</p>

                                    <p>Why is this approach important when there is clearly a better, preexisting solution? Algorithms produce optimal solutions. Intelligences produce blunders, with mistakes often forming the core of human experience. The most prevalent simulations of behavior are found in games. Usually an artificial character will follow a scripted, pre-planned route, with little to no variation. However a true simulation would involve a little random stupidity. Perhaps the character stubs their toe on a chair, or tries to use the wrong door. Traditionally, all of those interactions would need to be scripted, which accounts for their rarity. With machine learning, we have the potential to make simulations of meaningless events more believable, creating truly unique situations with exponentially less code than traditional scripting.</p>



                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>


                    </Col>

                    <Col xs={0} sm={2}><a href={baseUrl + "/#contact"} className="text-info bg-dark animate__animated animate__fadeInDown" style={{opacity:.9}}>Contact</a></Col>
                    
                </Row>

            </Container>
    </div>
    )
}


export default Projects;