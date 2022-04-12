import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding-top: 20vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.pri};
`;

// ======= Text area -->
export const Textsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const Title = styled.h1`
  width: 40vw;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size('xl')};
`;

export const Desc = styled.h3`
  width: 30vw;
  font-weight: 500;
  line-height: 3vh;
  color: ${({ theme }) => theme.alpha.lt_1(0.7)};
  font-size: ${({ theme }) => theme.fonts.size('md')};
  font-family: ${({ theme }) => theme.fonts.sec};
`;

export const BtnSection = styled.section`
  width: 50%;
  display: flex;
  padding: 3vh;
  gap: 1vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    color: ${({ theme }) => theme.alpha.lt_2(0.7)};
    font-size: ${({ theme }) => theme.fonts.size('xs')};
  }
`;

// ======= Image area -->
export const ImageSection = styled.section`
  width: 45vw;
  height: 35vh;
  position: relative;
  flex-shrink: 0;
`;
