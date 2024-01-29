import { Link } from "react-router-dom";
import "./ProjectsSection.scss";
import youchoose from "../../assets/images/youchoose.png";
import youchooseVideo from "../../assets/videos/youchoose.mp4";
import claireHome from "../../assets/images/claire-home.png";

export default function ProjectsSection() {
  return (
    <section className="projects">
        <div className="projects__wrap">

      <article className="individual-project">

      <h1 className="projects__title">Projects</h1>
        
        <Link to="https://github.com/anoushkapatel14/anoushka-patel-capstone">
          <img className="projects__img" src={youchoose} alt="youchoose demo" />
        </Link>

        <Link to="https://github.com/anoushkapatel14/anoushka-patel-capstone">
          {" "}
          <h2 className="projects__subheading">YouChoose</h2>
        </Link>

        <p className="projects__text">
          Welcome to YouChoose - the film selection app you didn’t know you
          needed! Two users with linked accounts are shown the same films. Users
          are able to swipe on films they want to watch, and if both users swipe
          right on a film, they get a 'match' and that film is put in their
          matches page. This app aims to stop endless scrolling when deciding
          what film to watch, and instead use YouChoose to find films both users
          are interested in watching.
        </p>
        <p className="projects__tech-stack">Tech Stack</p>
        <p className="projects__stack-info">
          Front End: HTML5, CSS, SASS, JavaScript, React
        </p>
        <p className="projects__stack-info">
          Back End: NodeJS, ExpressJS, Knex, MySQL
        </p>
        <p className="projects__stack-info">APIs: The Movie Database (TMDB)</p>
        <video className="projects__video" controls>
          <source src={youchooseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
      </article>

      <article className="individual-project">
        <Link to="https://clairewardsoprano.netlify.app/">
          {" "}
          <h2 className="projects__subheading">Claire Ward Soprano</h2>
        </Link>
        <img
          className="projects__img"
          src={claireHome}
          alt="Claire Ward's website"
        />

        <p className="projects__text">
          A portfolio website built for an opera singer to showcase her work and
          upcoming events.
        </p>

        <Link to="https://clairewardsoprano.netlify.app/"
       className="projects__text" >
            www.clairewardsoprano.netlify.app
        </Link>

      </article>
      </div>
    </section>
  );
}
