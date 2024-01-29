import AboutSection from "../../components/AboutSection/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import WorkExpSection from "../../components/WorkExpSection/WorkExpSection";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <main className="main">
        <h1 className="main__title">Hi, I'm <span className="main__accent"> Anoushka.</span></h1>
        <h2 className="main__job-main">Software Engineer </h2>
        <h2 className="main__and">&</h2>
        <h2 className="main__job-secondary">Former Director of Music</h2>

        <p className="main__emoji">👩🏾‍🏫</p>

<AboutSection />
        <ProjectsSection />
        <WorkExpSection />

        <ContactSection />
      </main>
    </>
  );
}
