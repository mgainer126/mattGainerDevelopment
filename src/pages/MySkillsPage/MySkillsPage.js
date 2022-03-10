import "../MySkillsPage/MySkillsPage.scss";
import Skills from "../../components/Skills/Skills";
import Header from "../../components/Header/Header";

function MySkillsPage() {
  return (
    <>
      <Header />
      <div className="my-skills-page">
        <Skills />
      </div>
    </>
  );
}

export default MySkillsPage;
