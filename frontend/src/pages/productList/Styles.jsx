import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 1.25rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 1.25rem;
  ${mobile({ width: '0px 1.25rem', display: 'flex', flexDirection: 'column' })}
`;

export const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
  ${mobile({ marginRight: '0px' })}
`;

export const Select = styled.select`
  padding: .625rem;
  margin-right: 1.25rem;
  ${mobile({ margin: '.625rem 0px' })}
`;
export const Option = styled.option``;
