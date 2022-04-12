import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  gap: 1vh;
  flex-direction: column;
  padding: 7vh 13vw;
`;

export const Tag = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pri};
  font-size: ${({ theme }) => theme.fonts.size('md')};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.size('xl')};
`;
export const Desc = styled.h3`
  width: 45%;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.sec};
  color: ${({ theme }) => theme.alpha.dk_1(0.8)};
  font-size: ${({ theme }) => theme.fonts.size('md')};
`;
