import React from "react"
import ReactDOM from "react-dom"



function Page() {
    return(
        <div className="outer-section">
              <section className="inner-section">
                  <img src="photo4.jpg" className="profile-photo"/>
                  <div className="middle-section">
                     <div className="nameandskill">
                        <h1 className="name">Segufta Nasrin Tamanna</h1>
                        <h3 className="skill">Frontend Developer</h3>
                     </div>
                        <h3 className="webpage">laurasmith.website</h3>
                      
                  
                    <div className="buttons">
                    <div className="email">
                      <i class="fa fa-envelope" id="envelope"></i>
                        <a> Email</a>
                    </div>
                       
                     <div className="linkedin">
                       <i class="fa fa-linkedin"></i>
                        <a> LinkedIn</a>
                     </div>
                       
                    </div>
                  <div className="deatils-section">
                    <h1 className="details">About</h1>
                      <p className="intro">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h1 className="details">Interests</h1>
                     <p className="intro">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                 </div>
                 </div>
                 <footer className="footer">
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-github"></a>
                 </footer>
              </section>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
