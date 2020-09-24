import Link from "next/link";
import Nev from "../components/Nev";
import Head from "next/head";
const Index = () => (
  <div>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="My SEO React app with Next JS"></meta>
      <meta name="keyword" content="next react seo"></meta>
      <meta name="author" content="Gaurav Kumar"></meta>
    </Head>
    <div>
      <Nev />
    </div>
    <h2>Hello from Next</h2>
    <Link href="/about">
      <a>About page</a>
    </Link>
    <p>
      loremAnim mollit fugiat deserunt anim adipisicing eiusmod sint aliqua
      laborum. Aute consequat et excepteur eu reprehenderit est ullamco eu ut
      est officia ea. Sit sint sint ipsum in sint mollit. Tempor exercitation
      pariatur qui labore duis.
    </p>
  </div>
);

export default Index;
