import GamesGrid from "../games/games-grid";
import classes from "./featured-games.module.css";

function FeaturedGames(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Games</h2>
      <GamesGrid games={props.games} />
    </section>
  );
}

export default FeaturedGames;
