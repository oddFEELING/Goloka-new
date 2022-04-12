import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import useMobile from '../../hooks/useMobile';
import useScroll from '../../hooks/useScroll';
import logo_dark from '../../assets/images/logo/goloka-logo.svg';
import logo_light from '../../assets/images/logo/goloka-logo-white.svg';
// ======= component imports -->
import {
  Container,
  DesktopNav,
  ImageHolder,
  MobileNav,
  MobileNavBox,
} from './NavBar.component';

const NavBar = () => {
  // ======= states  -->
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // ======= custom hooks -->
  const scrolled = useScroll();
  const isMobile = useMobile();

  // ======= button handler -->
  const menuHandler = () => {
    setMenuIsOpen((menuState) => !menuState);
  };

  const navLinks = [
    {
      text: `Collect Data`,
      link: ``,
    },
    {
      text: `Become an Agent`,
      link: ``,
    },
  ];

  return (
    <Container scrolled={scrolled} mobile={isMobile}>
      <ImageHolder>
        <Image src={scrolled ? logo_dark : logo_light} alt='' layout='fill' />
      </ImageHolder>

      {isMobile ? (
        <MobileNav>
          {/* ====== Mobile nav */}
          <Icon
            icon={menuIsOpen ? `ci:close-big` : `clarity:menu-line`}
            color={scrolled ? 'black' : 'white'}
            height='100%'
            onClick={menuHandler}
          />
          <MobileNavBox isopen={menuIsOpen}>
            {navLinks.map((item, index) => {
              return (
                <Link href={item.link} key={index} passHref>
                  <a className='link'>{item.text}</a>
                </Link>
              );
            })}
          </MobileNavBox>
        </MobileNav>
      ) : (
        <DesktopNav>
          {/* ====== desktop nav */}
          {navLinks.map((item, index) => {
            return (
              <Link href={item.link} key={index} passHref>
                <a className={scrolled ? 'link scroll' : 'link'}>{item.text}</a>
              </Link>
            );
          })}
        </DesktopNav>
      )}
    </Container>
  );
};

export default NavBar;
