import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 1.25rem;
  ${mobile({ padding: '.625rem' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const TopButton = styled.button`
  padding: .625rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

export const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px .625rem;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 12.5rem;
`;

export const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: .3125rem;
  ${mobile({ margin: '.3125rem .9375rem' })}
`;

export const ProductPrice = styled.div`
  font-size: 1.875rem;
  font-weight: 200;
  ${mobile({ marginBottom: '1.25rem' })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: .625rem;
  padding: 1.25rem;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 1.875rem 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '1.5rem'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: .625rem;
  background-color: black;
  color: white;
  font-weight: 600;
`;
