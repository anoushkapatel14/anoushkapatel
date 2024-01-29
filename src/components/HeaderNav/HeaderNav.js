import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <header className="header">
        <div className="header__nav">
      <a className="header__link" href="#about">
        About
      </a>
      <a className="header__link" href="#projects">
        Projects
      </a>
      <a className="header__link" href="#work-exp">
        Previous Roles
      </a>
      <a className="header__link" href="#contact">
        Contact
      </a>
      </div>
    </header>
  );
}
