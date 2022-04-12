import Head from 'next/head';
import { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import NavBar from '../components/nav/NavBar';
import useMobile from '../hooks/useMobile';
import AOS from 'aos';
import { Container, Main } from '../styles/Home.component';
import Collector from '../components/collector/Collector';
import Agent from '../components/agent/AGent';
import Footer from '../components/footer/Footer';

export default function Home() {
  const Mobile = useMobile();

  // ======= initialize AOS -->
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 0,
      disable: 'mobile',
      once: true,
    });
  });
  return (
    <Container>
      <Head>
        <title>Goloka | Launching soon!</title>
        <meta name='description' content='Goloka | We are launching soon' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Main>
        <NavBar />
        <Hero />
        <Collector />
        <Agent />
        <Footer />
      </Main>
    </Container>
  );
}
