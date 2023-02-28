import classes from "./all-games.module.css";
import GamesGrid from "./games-grid";

function AllGames(props) {
  return (
    <section className={classes.posts}>
      <h1>All Games</h1>
      <GamesGrid games={props.games} />
    </section>
  );
}

export default AllGames;
