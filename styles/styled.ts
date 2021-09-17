import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  span {
    color: white;
    font-size: 50px;
    text-align: center;
    margin: 50px 0 25px 0;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  margin: 0 12%;
  padding: 12px;
  background: gray;
  border: none;
  border-radius: 15px;
  li {
    font-size: 50px;
  }
`;
