import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4.375rem;
  margin-bottom: 1.25rem;
`;

export const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  ${mobile({ textAlign: 'center' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1.25rem;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
