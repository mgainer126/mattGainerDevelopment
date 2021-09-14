import "../MySkillsPage/MySkillsPage.scss";
import Skills from "../../components/Skills/Skills";
import NavBar from "../../components/NavBar/NavBar";

function MySkillsPage() {
  return (
    <>
      <NavBar />
      <div className="my-skills-page">
        <Skills />
      </div>
    </>
  );
}

export default MySkillsPage;
