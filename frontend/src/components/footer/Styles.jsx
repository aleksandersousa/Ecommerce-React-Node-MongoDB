import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 1.25rem 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
`;

export const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({ display: 'none' })}
`;

export const Title = styled.h3`
  margin-bottom: 1.875rem;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: .625rem;
`;

export const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

export const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
    width: 50%;
`;
