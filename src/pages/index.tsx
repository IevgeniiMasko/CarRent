import { Main } from '@/features/Landing';
import { Header } from '@/layouts/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>RentCar</title>
        <meta name="description" content="Rent your car" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Main />
      </main>
    </>
  );
}
