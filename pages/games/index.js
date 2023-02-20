import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

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
      <AllPosts posts={props.games} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allGames = getAllPosts();

  return {
    props: {
      games: allGames,
    },
  };
}

export default AllGamesPage;
