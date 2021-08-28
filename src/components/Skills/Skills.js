import "../Skills/Skills.scss";

function Skills() {
  return (
    <skills className="skills">
      <h3 className="skills__title">Skills</h3>
      <div className="skills__wrapper">
        <section className="skills__grp">
          <p className="skills__skill">HTML</p>
          <p className="skills__skill">CSS</p>
          <p className="skills__skill">SASS</p>
          <p className="skills__skill">Javascript</p>
          <p className="skills__skill">React.js</p>
          <p className="skills__skill">DOM</p>
          <p className="skills__skill">Web API</p>
        </section>
        <section className="skills__grp">
          <p className="skills__skill">Node.js</p>
          <p className="skills__skill">MySql</p>
          <p className="skills__skill">Knex</p>
          <p className="skills__skill">Express.js</p>
          <p className="skills__skill">GitHub</p>
          <p className="skills__skill">Jira</p>
          <p className="skills__skill">Confluence</p>
        </section>
      </div>
    </skills>
  );
}

export default Skills;
