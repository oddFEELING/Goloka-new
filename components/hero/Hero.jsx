import React from 'react';
import Image from 'next/image';
import HeroImg from '../../assets/images/hero/hero-image.png';
import useMobile from '../../hooks/useMobile.js';
import DotBox from '../../components/lib/dot_boxes/DotBox';
import {
  BtnSection,
  Container,
  Desc,
  ImageSection,
  Textsection,
  Title,
} from './Hero.component.js';
import Button from '../lib/button/Button.component';

const Hero = () => {
  const isMobile = useMobile();

  // ======= handle button click -->
  const formHandler = () => {
    window.open(
      'https://docs.google.com/forms/d/1gx09bXocZ37ctw4QrjJJiaHNSbJKZ0TWOt5CJcqTlDI/edit'
    );
  };
  return (
    <Container>
      {/* ====== image section */}
      <ImageSection>
        <Image
          src={HeroImg}
          alt=''
          layout='fill'
          data-aos='fade-up'
          data-aos-duration='1500'
          style={{ zIndex: 5 }}
          priority
        />
        <DotBox
          sx={{ zIndex: '3', position: 'absolute', right: '0' }}
          aosData='fade-up'
          aosDelay='700'
        />
        <DotBox
          sx={{ zIndex: '3', position: 'absolute', bottom: '0', left: '0' }}
          aosData='fade-up'
          aosDelay='900'
        />
      </ImageSection>

      {/* ====== text section */}
      <Textsection>
        {/* ====== title */}
        <Title data-aos='fade-up'>
          Crowdsource your data collection in real-time
        </Title>
        {/* ====== description */}
        <Desc data-aos='fade-up'>
          Goloka connects you with reality on the ground. Track and transmit
          offline data collected by thousands of community agents
        </Desc>
        {/* ====== button */}
        <BtnSection data-aos='fade-up'>
          <Button
            text='Launching soon! Get notified'
            bgColor='rgba(243, 244, 255)'
            onClick={formHandler}
          />
          <p>Your data is safe and never used for commercial purposes</p>
        </BtnSection>
      </Textsection>
    </Container>
  );
};

export default Hero;
