import Head from "next/head";
import { Fragment } from "react";

import GameContent from "../../components/games/game-detail/game-content";
import { getGameData, getGamesFiles } from "../../lib/games-util";

function GameDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.game.title}</title>
        <meta name="description" content={props.game.excerpt} />
      </Head>
      <GameContent game={props.game} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const gameData = getGameData(slug);

  return {
    props: {
      game: gameData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const gameFilenames = getGamesFiles();

  const slugs = gameFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default GameDetailPage;
