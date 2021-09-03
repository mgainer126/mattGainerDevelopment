import "../Portfolio/Portfolio.scss";
import PortfolioCards from "../PorfolioCards/PortfolioCards";

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
      <div className="portfoliocards">
        <PortfolioCards />
      </div>
    </section>
  );
}

export default Portfolio;
