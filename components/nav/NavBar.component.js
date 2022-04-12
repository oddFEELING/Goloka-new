import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 13vh;
  min-height: 60px;
  top: 0;
  gap: 5%;
  z-index: 100;
  padding: 0 12%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-start;
  transition: ${({ theme }) => theme.transitions.smooth};
  /* background-color: ${({ theme }) => theme.colors.pri}; */

  ${({ scrolled }) =>
    scrolled &&
    css`
      height: 8vh;
      padding: 0 8%;
      backdrop-filter: blur(4px);
      background-color: ${({ theme }) => theme.alpha.lt_1(0.8)};
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      padding: 0 4%;
      justify-content: space-between;
    `}
`;

// ======= Div to hold logo image -->
export const ImageHolder = styled.span`
  height: 80%;
  width: 12%;
  min-width: 150px;
  position: relative;
  transition: ${({ theme }) => theme.transitions.smooth};
`;

// ======= Desktop nav -->
export const DesktopNav = styled.nav`
  width: 50%;
  display: flex;
  gap: 10%;
  justify-content: flex-start;
  align-items: center;

  .link {
    color: ${({ theme }) => theme.colors.lt_1};
    transition: ${({ theme }) => theme.transitions.smooth};
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.sec};
    font-size: ${({ theme }) => theme.fonts.size('sm')};

    &:hover {
      color: ${({ theme }) => theme.alpha.lt_1(0.8)};
    }
  }

  .link.scroll {
    color: ${({ theme }) => theme.alpha.dk_2(0.9)};

    &:hover {
      color: ${({ theme }) => theme.colors.pri};
    }
  }
`;

// ======= mobile nav -->
export const MobileNav = styled.span`
  width: 65px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const MobileNavBox = styled.nav`
  width: min(60vw, 250px);
  height: 20vh;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  padding: 2vh 7vw;
  justify-content: center;
  gap: 3vh;
  opacity: 0;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.lt_1};
  position: absolute;
  bottom: min(-22vh, -120px);
  right: 0;
  transform: translateY(-50px);
  border-radius: 1vw;
  transition: ${({ theme }) => theme.transitions.smooth};

  ${({ isopen }) =>
    isopen &&
    css`
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    `}

  .link {
    cursor: pointer;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.pri};
    }
  }
`;
