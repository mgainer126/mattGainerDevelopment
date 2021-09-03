// import foodiofare from "../../assets/foodiofare.png";
// import brainflix from "../../assets/Logo-brainflix.svg";
import "../PorfolioCards/PortfolioCards.scss";
import portfolioCards from "../../assets/portfolioCards.json";

function PortfolioCards() {
  return portfolioCards.map((card) => {
    return <img src={card.image} className="portcard__box"></img>;
  });
}

export default PortfolioCards;
