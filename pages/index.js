import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! My name is João, and I'm Software Engineer.
          <br /> You can reach me on &nbsp;
          <a href="https://twitter.com/JvPelai">Twitter</a> or &nbsp;
          <a href="https://www.linkedin.com/in/jvpelai/">Linkedin</a>.
        </p>
      </section>
    </Layout>
  );
}
