import { useEffect, useState } from "react";
import { Main, Container } from "../styles/styled";
const axios = require("axios");

export default function Home() {
  //pega todos os planetas em uma única request
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/planets`)
      .then(function (response) {
        // handle success
        setPlanets(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <Main>
      <span>StarWars - Planetas e Pessoas</span>
      <Container>
        <ul>
          {planets ? (
            <>
              {planets.map((planet, i) => {
                return <li key={i}>{planet.name}</li>;
              })}
            </>
          ) : (
            "não"
          )}
        </ul>
      </Container>
    </Main>
  );
}
