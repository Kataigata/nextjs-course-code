import GameItem from "./game-item";
import classes from "./games-grid.module.css";

function GamesGrid(props) {
  const { games } = props;
  const definedGames = games ?? [];

  return (
    <ul className={classes.grid}>
      {definedGames.map((game) => (
        <GameItem key={game.slug} game={game} />
      ))}
    </ul>
  );
}

export default GamesGrid;
