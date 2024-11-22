import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>YO Home Sperm Test</title>
        <meta name="description" content="At-home sperm testing made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
    </div>
  );
}