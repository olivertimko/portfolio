import React from "react";

const About = () => {
  return (
    <div>
      <header>
        <h1>About</h1>
      </header>
      <div className="about-wrapper">
        <main className="about-main">
          <div className="about-main-content">
            <div className="about-main-content-1">
              <h2 className="about-main-h2">About the website</h2>
              <hr></hr>
              <p className="about-main-p">
                This website serves as my portfolio. I will be posting some of my{" "}
                <a className="links" href="/projects">
                  projects/works
                </a>{" "}
                here. You can also have a look at my list of{" "}
                <a className="links" href="/skills">
                  skills
                </a>
                . In addition, I have set up a{" "}
                <a className="links" href="/blog">
                  blog
                </a>{" "}
                and I might sometimes write a blog entry, so you can have a look
                at that too. In case you need to contact me or in case you want to
                go through some of my other links, you can do so at the{" "}
                <a href="/contacts" className="links">
                  contacts
                </a>{" "}
                page.
              </p>
            </div>
            <div className="about-main-content-2">
              <h2 className="about-main-h2">About me</h2>
              <hr></hr>
              <p className="about-main-p">
                Hello, I am Oliver Timko, a student from Bratislava, Slovakia. I
                am currently enrolled in the{" "}
                <a
                  className="links"
                  href="https://www.ibo.org/programmes/diploma-programme/"
                >
                  International Baccalaureate Diploma Programme (IBDP)
                </a>{" "}
                here in Bratislava. My primary academic focus is in Computer
                Science. I am particularly interested in Cybersecurity and would
                like to work in this field in the future. Besides IBDP, I am
                currently studying at the{" "}
                <a className="links" href="https://brno.itstep.org/">
                  STEP IT Academy
                </a>{" "}
                pursuing a certificate in Python Web Development (Junior
                Programmer). In addition, I am studying at the{" "}
                <a className="links" href="https://www.netacad.com/">
                  Cisco Networking Academy (NetAcad)
                </a>
                . I have successfully passed the the first course in a 3-course
                CCNA series designed to prepare people for entry-level networking
                jobs and at the moment I am enrolled in the second course. In my
                free time, I like to study and practice Cybersecurity, especially
                on the{" "}
                <a className="links" href="https://tryhackme.com">
                  TryHackMe
                </a>{" "}
                online learning platform. Besides that, I sometimes play CTF
                (Capture The Flag) challenges. However, right now I am more
                focused on learning, rather than applying my skills.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
