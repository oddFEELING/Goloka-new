import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import RandImg from '../../assets/svg/shape-3.svg';
import DotBox from '../../components/lib/dot_boxes/DotBox_2';
import LogoImg from '../../assets/images/logo/goloka-logo-white.svg';
import {
  Container,
  LogoDiv,
  Content,
  RandDiv,
  SocialDiv,
} from './Footer.component';

const Footer = () => {
  const socialData = [
    {
      icon: `icomoon-free:facebook`,
      link: ``,
    },
    {
      icon: `el:twitter`,
      link: ``,
    },
    {
      icon: `brandico:instagram-filled`,
      link: ``,
    },
    {
      icon: `el:linkedin`,
      link: ``,
    },
  ];
  return (
    <Container>
      {/* ====== logo */}
      <LogoDiv>
        <Image src={LogoImg} alt='' layout='fill' />
      </LogoDiv>

      {/* ====== text content */}
      <Content>
        Digitize the offline world. Aggregate and analyze offline data collected
        by field agents across your neighborhood, your city, or even interstate.
      </Content>

      {/* ====== socials */}
      <SocialDiv>
        {socialData.map((data, index) => {
          return (
            <Icon key={index} icon={data.icon} color='white' height='20' />
          );
        })}
      </SocialDiv>

      {/* ====== dotbox */}
      <DotBox
        aosData='fade-up'
        aosDelay='300'
        sx={{ position: 'absolute', right: 0, top: 0 }}
      />

      {/* ====== random circlebox */}
      <RandDiv>
        <Image src={RandImg} alt='' layout='fill' />
      </RandDiv>
    </Container>
  );
};

export default Footer;
