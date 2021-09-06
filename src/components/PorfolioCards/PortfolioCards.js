import { ExternalLink } from "react-external-link";
import "../PorfolioCards/PortfolioCards.scss";
import portfolioCards from "../../assets/portfolioCards.json";

function PortfolioCards() {
  return portfolioCards.map((card) => {
    return (
      <ExternalLink href={card.github}>
        <img src={card.image} alt="card" className="portcard__box"></img>
      </ExternalLink>
    );
  });
}

export default PortfolioCards;
