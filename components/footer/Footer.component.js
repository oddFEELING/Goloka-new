import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: max(40vh, 300px);
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
  width: 45vw;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.fixed('sm')};
  color: ${({ theme }) => theme.colors.lt_4};

  /* small screen */
  @media screen and (max-width: 800px) {
    width: 100%;
  }

  /* medium screen */
  @media screen and (max-width: 1200px) and (min-width: 800px) {
    width: 70vw;
  }
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
