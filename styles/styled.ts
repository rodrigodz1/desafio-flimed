import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15%;
  border: 1px solid red;
  background: gray;
  font-size: 100px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  span {
    color: white;
    font-size: 60px;
    text-align: center;
    margin: 50px 0 25px 0;
    font-weight: 700;
  }
`;
