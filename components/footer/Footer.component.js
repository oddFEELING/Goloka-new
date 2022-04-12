import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 40vh;
  display: flex;
  gap: 4vh;
  padding: 2vh 5vw;
  text-align: center;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dk_3};
`;

// ======= Logo  -->
export const LogoDiv = styled.div`
  width: 180px;
  height: 50px;
  position: relative;
`;

// ======= text area -->
export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.fixed('sm')};
  color: ${({ theme }) => theme.alpha.lt_1(0.7)};
`;

// ======= social section -->
export const SocialDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: ${({ theme }) => theme.transitions.smooth};
`;

// ======= random circle image -->
export const RandDiv = styled.div`
  height: 250px;
  width: 450px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
