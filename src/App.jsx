import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logoo.jpg'
import Home from './Home'
import Contact from './Contact'
import Education from './Education'

const roles = [
  "Java Developer",
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer"
]

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [page, setPage] = useState('home');

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout


    //type and del
    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1))
        if (text === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }, 60)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <>
      <div className="appbarr">
        <div className="imagebox">
          <img src={logo} alt="profile" />
        </div>

        <div className="namebox">
          <h1>MANTESH KUBIHAL</h1>
          <h3>
            I am <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h3>
        </div>

        <div className="taskcontents">
          <button onClick={() => setPage('contact')}>Contact Me</button>
          <button onClick={() => setPage('education')}>Education</button>
          <button onClick={() => setPage('home')}>Home</button>
        </div>
      </div>

      {page === 'home' && <Home />}
      {page === 'education' && <Education />}
      {page === 'contact' && <Contact />}


      <div className="bottombar">
        <div className="bottombarboxes">
          <div className="bb1">
            <h3>Thank You</h3>
            <p>Thank you for taking your time to visit my website.</p>
          </div>

          <div className="bb2">
            <h3>About This Site</h3>
            <p>This site showcases my projects, skills, and learning journey.</p>
          </div>

          <div className="bb3">
            <h3>Learning & Growth</h3>
            <p>I’m constantly improving my skills in web development and design.</p>
          </div>

          <div className="bb4">
            <h3>Let’s Connect</h3>
            <p>Feel free to contact me. I am currently looking for opportunities.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
