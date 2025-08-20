'use client'
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const OuterCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #96c93d
  );
  position: absolute;
  filter: brightness(1.2);
`;

const InnerCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(255, 255, 255);
  position: absolute;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;


export const GlassCircle = () => {
    return (
        <Container>
            <OuterCircle />
            <InnerCircle />
        </Container>
    )
}