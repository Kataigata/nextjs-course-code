import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/logo.png"
          alt="An image showing Pikachu"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nix</h1>
      <p>
        I'm playing one of every generation of Pokemon games and tracking the
        teams used
      </p>
    </section>
  );
}

export default Hero;
