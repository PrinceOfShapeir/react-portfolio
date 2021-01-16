import React, {Component} from 'react';

class Home extends Component{
    componentDidMount(){
        //something
    }

    render() {
        return (

                <div  className="mx-auto">
                    
                    <h1>About</h1>

                    <p>My name is Sean Farley. I am a full stack developer.</p>

                    <a href="/projects">See my projects!</a>

                   
                </div>

        );
}
}

export default Home;