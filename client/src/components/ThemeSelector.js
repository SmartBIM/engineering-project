import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { redTheme, whiteTheme, blueTheme } from '../themes';
import { applyTheme } from '../redux/themeActions'


const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  box-shadow: none;
  border: 1px solid white;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: .625rem .75rem;
  margin: .75rem;
  cursor: pointer;
`;

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const changeTheme = (theme) => {
    console.log(theme);
    dispatch(applyTheme(theme));
  }
  return (
    <div>
      <StyledButton style={{backgroundColor: "maroon"}} onClick={() => changeTheme(redTheme)}>R</StyledButton>
      <StyledButton style={{backgroundColor: "white"}} onClick={() => changeTheme(whiteTheme)}>W</StyledButton>
      <StyledButton style={{backgroundColor: "dodgerblue"}} onClick={() => changeTheme(blueTheme)}>B</StyledButton>
    </div>
  );
}
export default ThemeSelector;