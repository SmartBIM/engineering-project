import styled, { css } from 'styled-components';

export const DefaultInput = styled.input`
  border: 1px solid ${({error})=>( error ? `red` : `grey` )};
  border-radius: 4px;
  outline: none;
  padding: 0.5em;
`;

export const baseInputStyles = css`
  border: 1px solid ${({error})=>( error ? `red` : `grey` )};
  border-radius: 4px;
  outline: none;
  padding: 0.5em;
`;