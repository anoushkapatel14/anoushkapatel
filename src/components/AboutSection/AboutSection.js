import "./AboutSection.scss";


export default function AboutSection() {
  return (
    <>
      <section className="about">
        <div className="about__wrap">
          <article className="about__article">
        <h1 className="about__title">About Me</h1>

        <h2 className="about__subheading">
          From conducting symphonies to orchestrating code!{" "}
        </h2>

        <p className="about__text">
          Hey there! I'm a recent graduate of the Software Engineering bootcamp
          at BrainStation. Picture this: I've traded in my conductor's baton for
          a keyboard and mouse, making the jump from Director of Music to coding
          maestro!
        </p>

        <p className="about__text">
          My career pivot showcases adaptability and a love for lifelong
          learning. As a past teacher, my forte lies in soft skills:
          communication, teamwork, and problem-solving.
        </p>

        <p className="about__text">
          My mission? To merge my diverse background with software engineering.
          I'm eager to collaborate on innovative projects, add value to teams,
          and infuse a touch of creativity into tech solutions. Let's turn code
          into a symphony of success! 🚀🎉
        </p>
        </article>
        </div>
      </section>
    </>
  );
}
