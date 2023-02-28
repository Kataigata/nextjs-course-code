import { Fragment } from "react";
import Head from "next/head";

import FeaturedGames from "../components/home-page/featured-games";
import Hero from "../components/home-page/hero";
import { getFeaturedGames } from "../lib/games-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Pokemon Tracker</title>
        <meta
          name="description"
          content="Tracking the playing of each pokemon game"
        />
      </Head>
      <Hero />
      <FeaturedGames games={props.games} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredGames = getFeaturedGames();

  return {
    props: {
      games: featuredGames,
    },
  };
}

export default HomePage;
