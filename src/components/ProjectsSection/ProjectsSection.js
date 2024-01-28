import { Link } from "react-router-dom";
import "./ProjectsSection.scss";
import youchoose from "../../assets/images/youchoose.png";
import claire from "../../assets/images/claire-homepage.png";

export default function ProjectsSection() {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>

      <h2 className="projects__subheading">YouChoose</h2>

      <Link to="https://github.com/anoushkapatel14/anoushka-patel-capstone">
        <img className="projects__img" src={youchoose} alt="youchoose demo" />
      </Link>

      <p className="projects__text">
        Welcome to YouChoose - the film selection app you didn’t know you
        needed! Two users with linked accounts are shown the same films. Users
        are able to swipe on films they want to watch, and if both users swipe
        right on a film, they get a 'match' and that film is put in their
        matches page. This app aims to stop endless scrolling when deciding what
        film to watch, and instead use YouChoose to find films both users are
        interested in watching.
      </p>
    </section>
  );
}
