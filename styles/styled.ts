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
  display: flex;
  margin: 0 12%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.darkblue};
  border: none;
  border-radius: 15px;
  li {
    font-size: 50px;
  }
  column-gap: 25px;
`;

export const PlanetsDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-size: 32px;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    row-gap: 5px;
    button {
      cursor: pointer;
      padding: 3px 0;
      border: none;
      border-radius: 5px;
      // background-color: ${({ theme }) => theme.colors.primary};
      // color: white;
      font-weight: 500;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }
`;

export const PeopleDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 90px;
  background-color: ${({ theme }) => theme.colors.paleblue};
  border: none;
  border-radius: 15px;
  button {
    padding: 5px 10px;
    font-size: 18px;
    border: 2px solid blue;
    background-color: ${({ theme }) => theme.colors.gradient};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
    &:focus {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
  div {
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
  }
  aside {
    display: flex;
    column-gap: 10px;
  }
`;

export const FavoritesUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  list-style-type: none;
  border: none;
  border-radius: 5px;
  margin: 1% 12%;
  background-color: ${({ theme }) => theme.colors.paleblue};
  font-weight: 700;
  li {
    font-size: 15px;
  }
`;
