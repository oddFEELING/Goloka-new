import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: max(100vh, 600px);
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding-top: 20vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.pri};

  /* small screen */
  @media screen and (max-width: 800px) {
    height: 70vh;
  }
  /* small screen  landscape*/
  @media screen and (max-width: 900px) and (orientation: landscape) {
    height: 500px;
    padding-top: 30vh;
  }
`;

// ======= Text area -->
export const Textsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;

  /* small screen  landscape*/
  @media screen and (max-width: 900px) and (orientation: landscape) {
    gap: 5vh;
  }
`;

export const Title = styled.h1`
  width: 45vw;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size('xl')};

  /* snall screen */
  @media screen and (max-width: 800px) {
    width: 80%;
  }

  /* medium screen */
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
`;

export const Desc = styled.h3`
  width: 30vw;
  font-weight: 500;
  line-height: 3vh;
  color: ${({ theme }) => theme.alpha.lt_1(0.7)};
  font-size: ${({ theme }) => theme.fonts.size('md')};
  font-family: ${({ theme }) => theme.fonts.sec};

  /* small screen */
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  /* medium screen */
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  /* small screen  landscape*/
  @media screen and (max-width: 900px) and (orientation: landscape) {
    line-height: 5vh;
  }
`;

export const BtnSection = styled.section`
  width: 80%;
  display: flex;
  padding: 3vh;
  gap: 1.5vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    color: ${({ theme }) => theme.alpha.lt_2(0.7)};
    font-size: ${({ theme }) => theme.fonts.size('xs')};
  }

  /* small screen */
  @media screen and (max-width: 800px) {
    width: 80%;
  }

  /* medium screen */
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

// ======= Image area -->
export const ImageSection = styled.section`
  width: 45vw;
  height: 35vh;
  position: relative;
  flex-shrink: 0;

  /* small screen  */
  @media screen and (max-width: 800px) {
    width: 95%;
    height: 20vh;
  }

  /* medium screen */
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 60%;
    height: 30vh;
  }
`;
