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

  @media (max-width: 1023px) {
    span {
      font-size: 30px;
    }
    div {
      div {
        span {
          margin: 0;
          font-size: 25px;
        }
      }
    }
  }

  @media (max-width: 720px) {
    span {
      font-size: 25px;
    }
    div {
      div {
        span {
          margin: 0;
          font-size: 25px;
        }
      }
    }
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

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
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
    gap: 5px;
    button {
      cursor: pointer;
      padding: 3px 1px;
      border: none;
      border-radius: 5px;
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

  @media (max-width: 1200px) {
    align-items: center;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      button {
        font-size: 16px;
        padding: 1px;
      }
    }
  }

  @media (max-width: 720px) {
    align-items: center;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      padding: 0;
      button {
        font-size: 16px;
        padding: 4px;
        font-weight: 700;
        background-color: white;
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
    display: flex;
    align-items: center;
    &.favorite {
      span {
        color: yellow;
      }
    }
    &.clean {
      span {
        color: gray;
      }
    }
    span {
      margin: 0;
      padding: 0;
      font-size: 25px;
      color: black;
    }
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
    transition-property: background;
    transition-duration: 0.3s;
    transition-timing-function: linear;
  }
  div {
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
  }
  aside {
    display: flex;
    column-gap: 6px;
  }

  @media (max-width: 1023px) {
    padding: 5px 35px;
    button {
      background: white;
    }
  }

  @media (max-width: 720px) {
    margin: 0;
    padding: 0 35px;
    width: 100%;
    row-gap: 5px;
    aside {
      button {
        background: white;
        padding: 0 2px;
        margin: 5px;
        font-size: 16px;
      }
    }
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

  @media (max-width: 720px) {
    margin: 3% 12%;
  }
`;
