import React from 'react';
import styled from 'styled-components';

//=============================================>  Render component
const Button = React.memo(({ ...props }) => {
  // ======= destructure props -->
  const { bgColor, text, onClick } = props;
  return (
    <Component onClick={onClick} bgColor={bgColor}>
      {text}
    </Component>
  );
});

//=============================================>  Styled component
const Component = styled.button`
  padding: 2vh 30px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size('md')};
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    color: ${({ theme }) => theme.colors.pri};
  }
`;

export default Button;
