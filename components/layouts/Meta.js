import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? title : "jewellery"}</title>
      <meta name="description" content={description ? description : "jewellery store"} />
      <meta charSet="utf-8" />
      <meta name="robots" content="index,follow" />
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link href="/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
    </Head>
  );
};

export default Meta;
