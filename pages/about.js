import Link from "next/link";
import Nev from "../components/Nev";
const myStyle = {
  color: "red",
  borderLeft: "5px solid black",
  padding: "5px",
};

const About = () => (
  <div>
    <Nev />
    <h2>About Page</h2>
    <Link href="/">
      <a style={myStyle}>Home Page</a>
    </Link>
    <p>
      LoremPariatur laborum minim exercitation ut in quis labore dolore
      exercitation Lorem. Id mollit eu sit ut fugiat eiusmod culpa officia in
      amet incididunt ad sunt anim. Ea nulla enim dolore nisi exercitation ea
      duis consequat cupidatat dolor tempor cupidatat labore. Sint cillum eu
      ipsum consequat enim mollit quis amet enim occaecat duis mollit dolor
      exercitation.
    </p>
    <style jsx>{`
      p {
        color: indigo;
        font-size: 20px;
      }
    `}</style>
  </div>
);

export default About;
