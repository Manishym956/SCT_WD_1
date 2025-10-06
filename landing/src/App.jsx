import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <h1>Craft your future with SkillCraft</h1>
              <p>Learn modern skills with project-based courses taught by industry experts.</p>
              <div className="hero__actions">
                <a href="#services" className="btn btn--primary">Explore Courses</a>
                <a href="#about" className="btn btn--ghost">Learn More</a>
              </div>
            </div>
            <div className="hero__media" aria-hidden="true">
              <div className="hero__blob" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid grid--2">
            <div>
              <h2>About Us</h2>
              <p>
                We are a team of passionate educators and engineers helping learners build
                practical skills in web development, UI/UX, and data.
              </p>
              <ul className="list">
                <li>Hands-on projects and guided labs</li>
                <li>Mentor feedback and community support</li>
                <li>Career-focused learning paths</li>
              </ul>
            </div>
            <div className="card card--glass">
              <h3>Why SkillCraft?</h3>
              <p>
                Our curriculum is updated monthly to keep pace with the industry, so you learn
                what actually matters.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Popular Tracks</h2>
            <div className="grid grid--3">
              <div className="card">
                <h3>Frontend Development</h3>
                <p>React, TypeScript, Accessibility, and performance optimization.</p>
                <a href="#contact" className="btn btn--link">Get syllabus →</a>
              </div>
              <div className="card">
                <h3>Backend APIs</h3>
                <p>Node.js, databases, authentication, and cloud deployment.</p>
                <a href="#contact" className="btn btn--link">Get syllabus →</a>
              </div>
              <div className="card">
                <h3>UI/UX Foundations</h3>
                <p>Design systems, prototyping, user testing, and handoff.</p>
                <a href="#contact" className="btn btn--link">Get syllabus →</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container grid grid--2">
            <div>
              <h2>Contact Us</h2>
              <p>Have questions? Reach out and we’ll get back within 1 business day.</p>
              <div className="stack">
                <div className="info">
                  <span>📧</span>
                  <a href="mailto:hello@skillcraft.dev">hello@skillcraft.dev</a>
                </div>
                <div className="info">
                  <span>📞</span>
                  <a href="tel:+10000000000">+1 (000) 000-0000</a>
                </div>
              </div>
            </div>
            <form className="card form" onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Message</span>
                <textarea rows="4" placeholder="How can we help?" />
              </label>
              <button className="btn btn--primary" type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} SkillCraft</span>
          <a href="#home" className="btn btn--ghost btn--sm">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default App;