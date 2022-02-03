import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
  ${mobile({ padding: '.625rem', flexDirection: 'column' })}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 3.125rem;
  ${mobile({ padding: '.625rem' })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 1.25rem 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 1.875rem 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px .3125rem;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: .625rem;
  padding: .3125rem;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: .625rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px .3125rem;
`;

export const Button = styled.button`
  padding: .9375rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
