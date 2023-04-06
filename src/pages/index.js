import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luhmann</title>
        <meta
          name="description"
          content="Made with love by Ali Sertaç Cebeci"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="91x67" href="/synnada.png" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-screen font-inter ">
        <div className="font-bold">test</div>
      </main>
    </>
  );
}
