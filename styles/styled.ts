import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  span {
    color: white;
    font-size: 60px;
    text-align: center;
    margin: 50px 0 25px 0;
    font-weight: 700;
    &::after {
      content: " -----";
    }
    &::before {
      content: "----- ";
      font-weight: 400;
    }
  }
`;

export const Container = styled.div`
  margin: 0 15%;
  background: gray;
  font-size: 100px;
  border: none;
  border-radius: 15px;
`;
