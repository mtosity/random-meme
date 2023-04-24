import Head from "next/head";

/*
  Setup server side rendering:
   - fetch random meme from reddit https://www.reddit.com/r/memes/random.json
   - set the image as the website thumbnail
*/

export async function getServerSideProps() {
  const res = await fetch("https://www.reddit.com/r/memes/random.json");
  const data = await res.json();
  const url = data[0].data.children[0].data.url;
  return {
    props: {
      url,
    },
  };
}

export default function Home({ url }) {
  return (
    <div className="container">
      <Head>
        <title>Random meme</title>
        <meta name="description" content="New meme every refresh" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={url} />
        <meta property="twitter:image" content={url} />
      </Head>

      <main className="center">
        <img src={url} alt="meme" className="meme" />
      </main>
    </div>
  );
}
