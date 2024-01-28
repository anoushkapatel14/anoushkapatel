import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <main className="main">
        <h1 className="main__title">Hi, I'm Anoushka.</h1>
        <h2 className="main__job-main">Software Engineer &</h2>
        <h2 className="main__job-secondary">Former Director of Music</h2>

<AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
