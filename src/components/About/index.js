import React from 'react'
import "../../App.css"

const About = () => {
    return ( 
        <div className="about-container">
            <p>
            Melody Interpolater uses the power of recurrent neural networks to generate music in the styles of classical composers. Our team trains neural network models to learn the styles of composers from their music samples. We then utilize a prediction algorithm to allow users to generate music based on what the model has learned. Currently, we have trained models for Bach, Beethoven, Chopin and Mozart with plans to expand into styles of other classical composers. Users can generate music themselves by heading to "Generator" and following the instructions. Users can also listen to music samples generated by the team by heading to "Library".
            </p>
            <h4>
            Our Team:
            </h4>
            <ul>
              <li>A Apte</li> 
              <li>Joshua Solis</li> 
              <li>Tony Tia</li>  
            </ul>
        </div>
     );
}
 
export default About;