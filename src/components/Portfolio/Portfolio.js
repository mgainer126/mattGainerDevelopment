import "../Portfolio/Portfolio.scss";
import foodiofare from "../../assets/foodiofare.png";

function Portfolio() {
  return (
    <section className="port">
      <h2 className="port__title">My Portfolio</h2>
      <div className="port__summary-cta">
        <p className="port__summary">
          Here are a few samples of the projects that I've worked on
        </p>
        <div className="port__seemore">See More</div>
      </div>
      <cards className="cards">
        <cards className="cards-row1">
          <div className="cards__card">
            <img src={foodiofare} alt="foodiofare" className="cards__img"></img>
          </div>
          <div className="cards__card"></div>
        </cards>
        <cards className="cards-row2">
          <div className="cards__card"></div>
          <div className="cards__card"></div>
        </cards>
        <cards className="cards-row3">
          <div className="cards__card"></div>
          <div className="cards__card"></div>
        </cards>
      </cards>
    </section>
  );
}

export default Portfolio;
