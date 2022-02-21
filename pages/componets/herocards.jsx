import HeroCard from "./Herocard";

const HeroCards = () => {
  return (
    <div className="hero-cards">
      <HeroCard img="/images/supply.svg" name="SUPPLY" value="10001 ITEMS" />
      <HeroCard img="/images/cost.svg" name="COST" value="0.0269 ETH" />
      <HeroCard img="/images/wen.svg" name="WHEN" value="NOW" />
    </div>
  );
};

export default HeroCards;
