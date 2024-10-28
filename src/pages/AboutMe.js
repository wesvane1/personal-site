import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className="about-me-container">
        <p>
          My name is Wes Vane, an aspiring Full Stack developer attending Brigham Young University Idaho. I am set to graduate in April of 2025. It’s been quite the journey. I started school in April 2020, with hopes of making big bucks as an orthopedic surgeon, unfortunately after some bad grades I decided that the medical field was not for me. I was not allowed to be creative, and the time that I would spend away from my family would be very difficult. I want a family so I can spend time with them! Not so I can be a successful Doctor! So I switched to software engineering. This has been the best decision of my life, I can be creative, and make whatever I want! The possibilities are endless. Along with that I have found that I am very optimistic about my future, and can’t wait to see what I can do. If you made it this far, that probably means you’re interested in what I have to offer. Here is a link to my resume, YouTube channel, and GitHub. Thanks so much for visiting.
        </p>
      </div>
      <div className="links">
        <li>
          <a href="https://www.github.com/wesvane1" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wesley-vane-733758253" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@wesleyvane4478" target="_blank">YouTube</a>
        </li>
      </div>
      <Footer />
    </>
  );
}