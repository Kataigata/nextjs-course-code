import fs from "fs";
import path from "path";
import matter from "gray-matter";

const gamesDirectory = path.join(process.cwd(), "games");

export function getGamesFiles() {
  return fs.readdirSync(gamesDirectory);
}

export function getGameData(gameIdentifier) {
  const gameSlug = gameIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(gamesDirectory, `${gameSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const gameData = {
    slug: gameSlug,
    ...data,
    content,
  };

  return gameData;
}

export function getAllGames() {
  const gameFiles = getGamesFiles();

  const allgames = gameFiles.map((gameFile) => {
    return getGameData(gameFile);
  });

  const sortedgames = allgames.sort((gameA, gameB) =>
    gameA.date > gameB.date ? -1 : 1
  );

  return sortedgames;
}

export function getFeaturedGames() {
  const allgames = getAllGames();

  const featuredgames = allgames.filter((game) => game.isFeatured);

  return featuredgames;
}
