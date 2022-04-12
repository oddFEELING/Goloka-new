import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

//=============================================>  Rendered component
const IconBox = React.memo(({ ...props }) => {
  // ======= destructure props  -->
  const { icon, title, desc, aosData, aosDelay, ic_aosData, ic_aosDelay } =
    props;
  return (
    <Container>
      <IconSection data-aos={ic_aosData} data-aos-delay={ic_aosDelay}>
        {/* ====== back div */}
        <BackDiv className='back__div' />

        {/* ====== main div */}
        <MainDiv>
          <Icon icon={icon} color='white' height='35' />
        </MainDiv>
      </IconSection>

      {/* ====== text section */}
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
});

export default IconBox;

//=============================================>  styled component
const Container = styled.div`
  width: max(15vw, 250px);
  height: 250px;
  display: flex;
  gap: 5%;
  flex-direction: column;
  flex-shrink: 0;
  /* background-color: ${({ theme }) => theme.alpha.error(0.8)}; */
`;

// ======= Icon section -->
const IconSection = styled.section`
  width: 100%;
  height: 50%;
  position: relative;
  display: flex;
  align-items: center;

  &:hover > .back__div {
    transform: rotate(45deg);
  }
`;

// ======= back div of icon -->
const BackDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  transform: rotate(20deg);
  position: absolute;
  background-color: ${({ theme }) => theme.alpha.pri(0.4)};
  transition: ${({ theme }) => theme.transitions.smooth};
`;
// ======= main div of icon -->
const MainDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.alpha.pri(0.95)};
  transition: ${({ theme }) => theme.transitions.smooth};
`;

// ======= title text -->
const Title = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.alpha.dk_1(0.8)};
  font-size: ${({ theme }) => theme.fonts.fixed('md')};
`;
// ======= description text -->
const Desc = styled.p`
  font-family: ${({ theme }) => theme.fonts.sec};
  color: ${({ theme }) => theme.alpha.dk_1(0.6)};
  font-size: ${({ theme }) => theme.fonts.fixed('sm')};
`;
