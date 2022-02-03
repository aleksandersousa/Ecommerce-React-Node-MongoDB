import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

export const Arrow = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '.625rem'};
  right: ${(props) => props.direction === 'right' && '.625rem'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;
`;

export const Title = styled.h1`
  font-size: 4.375rem;
`;

export const Desc = styled.p`
  margin: 3.125rem 0px;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: .1875rem;
`;

export const Button = styled.button`
  padding: .625rem;
  font-size: 1.25rem;
  background-color: transparent;
  cursor: pointer;
`;
