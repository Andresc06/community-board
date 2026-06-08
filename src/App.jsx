import './App.css';
import Header from './components/Header/Header';
import ResourceCard from './components/ResourceCard/ResourceCard';

const App = () => {

  return (
    <div className="app">
      <Header />
      <main className="wrap" id="resources">
        <section className="grid" aria-label="Programming learning resources">
          <ResourceCard
            title="MDN Web Docs"
            category="Documentation"
            catClass="doc"
            description="Trusted documentation for HTML, CSS, JavaScript, and web APIs."
            url="https://developer.mozilla.org/"
            imageUrl="https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128"
          />
          <ResourceCard
            title="freeCodeCamp"
            category="Course"
            catClass="course"
            description="Free coding lessons and projects for web development fundamentals."
            url="https://www.freecodecamp.org/"
            imageUrl="https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=128"
          />
          <ResourceCard
            title="The Odin Project"
            category="Course"
            catClass="course"
            description="A full curriculum for learning web development through projects."
            url="https://www.theodinproject.com/"
            imageUrl="https://www.google.com/s2/favicons?domain=theodinproject.com&sz=128"
          />
          <ResourceCard
            title="Codecademy"
            category="Course"
            catClass="course"
            description="Interactive lessons for learning programming and front-end skills."
            url="https://www.codecademy.com/"
            imageUrl="https://www.google.com/s2/favicons?domain=codecademy.com&sz=128"
          />
          <ResourceCard
            title="LeetCode"
            category="Practice"
            catClass="prac"
            description="Practice coding interview problems and strengthen problem-solving skills."
            url="https://leetcode.com/"
            imageUrl="https://www.google.com/s2/favicons?domain=leetcode.com&sz=128"
          />
          <ResourceCard
            title="Frontend Mentor"
            category="Challenge"
            catClass="chal"
            description="Build real front-end projects from design files and improve your portfolio."
            url="https://www.frontendmentor.io/"
            imageUrl="https://www.google.com/s2/favicons?domain=frontendmentor.io&sz=128"
          />
          <ResourceCard
            title="Roadmap.sh"
            category="Roadmap"
            catClass="road"
            description="Clear learning roadmaps for front-end, back-end, and more."
            url="https://roadmap.sh/"
            imageUrl="https://www.google.com/s2/favicons?domain=roadmap.sh&sz=128"
          />
          <ResourceCard
            title="GeeksforGeeks"
            category="Practice"
            catClass="prac"
            description="Articles, tutorials, and practice problems for computer science topics."
            url="https://www.geeksforgeeks.org/"
            imageUrl="https://www.google.com/s2/favicons?domain=geeksforgeeks.org&sz=128"
          />
          <ResourceCard
            title="W3Schools"
            category="Documentation"
            catClass="doc"
            description="Quick reference guides and examples for web technologies."
            url="https://www.w3schools.com/"
            imageUrl="https://www.google.com/s2/favicons?domain=w3schools.com&sz=128"
          />
          <ResourceCard
            title="Exercism"
            category="Practice"
            catClass="prac"
            description="Practice coding with mentor-guided exercises across many languages."
            url="https://exercism.org/"
            imageUrl="https://www.google.com/s2/favicons?domain=exercism.org&sz=128"
          />
          <ResourceCard
            title="Scrimba"
            category="Course"
            catClass="course"
            description="Interactive screencasts for learning JavaScript and front-end development."
            url="https://scrimba.com/"
            imageUrl="https://www.google.com/s2/favicons?domain=scrimba.com&sz=128"
          />
          <ResourceCard
            title="CS50"
            category="Course"
            catClass="course"
            description="Harvard's famous introduction to computer science and programming."
            url="https://cs50.harvard.edu/x/"
            imageUrl="https://www.google.com/s2/favicons?domain=cs50.harvard.edu&sz=128"
          />
        </section>
      </main>
    </div>
  )
}

export default App