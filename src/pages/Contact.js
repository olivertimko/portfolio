import React from "react";

const Contact = () => {
    return (
      <div>
        <header>
          <h1>Contact</h1>
        </header>
        <div className="contact-wrapper">
            <main className="contact-main">
                <div className="contact-main-content">
                    <div className="contact-main-content-1">
                        <h2 className="contact-main-h2">How to contact me?</h2>
                        <hr></hr>
                        <ul className="contact-main-ul">
                            <li className="contact-main-li">
                                <b>Email:</b> olivertimko [at] protonmail [dot] com
                            </li>
                        </ul>
                    </div>
                    <div className="contact-main-content-2">
                        <h2 className="contact-main-h2">Other links where you can find me:</h2>
                        <hr></hr>
                        <ul className="contact-main-ul">
                            <li className="contact-main-li">
                                <a className="links" href="https://www.linkedin.com/in/olivertimko/">Linkedin</a>
                            </li>
                            <li className="contact-main-li">
                                <a className="links"href="https://github.com/olivertimko">GitHub</a>
                            </li>
                            <li className="contact-main-li">
                                <a className="links"href="https://tryhackme.com/p/AkOs49">TryHackMe</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>    
      </div>
    );
};

export default Contact;