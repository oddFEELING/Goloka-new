import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: max(60vh, auto);
  display: flex;
  gap: 1vh;
  flex-direction: column;
  padding: 7vh 15vw;
  background-color: ${({ theme }) => theme.colors.lt_1};

  @media screen and (max-width: 800px) {
    padding: 7vh 8vw;
  }
`;

export const Tag = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pri};
  font-size: ${({ theme }) => theme.fonts.fixed('md')};

  /* small screen */
  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.fixed('sm')};
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.alpha.dk_1(0.8)};
  font-size: ${({ theme }) => theme.fonts.size('xl')};

  /* small screen */
  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.fixed('lg')};
  }
`;
export const Desc = styled.h3`
  width: 45%;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.pri};
  color: ${({ theme }) => theme.alpha.dk_1(0.6)};
  font-size: ${({ theme }) => theme.fonts.size('md')};

  /* small screen */
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.fixed('sm')};
  }
`;

export const StepArea = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: space-between;
  margin-top: 3vh;
  align-items: center;
`;
