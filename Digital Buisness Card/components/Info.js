import React from 'react'



export default function Info() {
    return (
        <div className="info-container">
            <div className="image-container"></div>
            <div className= "name-info">
                <h2 className= "name">Kawter Moussaoui</h2>
                <h3 className="job">Front-End Developer</h3>
                <p className= "website">github.com</p>
            </div>
            <div className="button-container">
                <div className="button button1">
                    <img src="../Images/Icon.png" className="email-image"/>
                    <p className ="email-text">Email</p>
                </div>
                
                <div className="button button2">
                    <img src="../Images/Vector.png" className ="linkedin-image"/>
                    <p className ="linkedin-text">LinkedIn</p>
                </div>
            </div>
        </div>
        )
}