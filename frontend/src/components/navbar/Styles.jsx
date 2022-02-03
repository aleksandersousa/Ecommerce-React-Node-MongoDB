import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  height: 3.75rem;
  ${mobile({ height: '3.125rem' })}
`;

export const Wrapper = styled.div`
  padding: .625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '.625rem 0px' })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: .875rem;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5625rem;
  padding: .3125rem;
`;

export const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: '3.125rem' })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  color: black;
  cursor: pointer;
  ${mobile({ fontSize: '1.5rem' })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

export const MenuItem = styled.div`
  font-size: .875rem;
  cursor: pointer;
  margin-left: 1.5625rem;
  ${mobile({ fontSize: '12px', marginLeft: '.625rem' })}
`;
