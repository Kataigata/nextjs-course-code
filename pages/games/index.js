import Head from "next/head";
import { Fragment } from "react";

import AllGames from "../../components/games/all-games";
import { getAllGames } from "../../lib/games-util";

function AllGamesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Games</title>
        <meta
          name="description"
          content="A list of all the games I've played for this challenge!"
        />
      </Head>
      <AllGames games={props.games} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allGames = getAllGames();

  return {
    props: {
      games: allGames,
    },
  };
}

export default AllGamesPage;
