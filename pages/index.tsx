import { useEffect, useState } from "react";
import { Main, Container, PlanetsDiv, PeopleDiv } from "../styles/styled";
const axios = require("axios");

export default function Home() {
  //pega todos os planetas em uma única request
  const [planets, setPlanets] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState("");
  const [favorites, setFavorites] = useState([]);

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

    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/people`)
      .then(function (response) {
        setPessoas(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  function showPpl(pessoa) {
    let homeland = "";
    planets.forEach((planet) => {
      if (planet.url == pessoa.homeworld) {
        setCurrentPlanet(`O planeta natal de ${pessoa.name} é ${planet.name}.`);
        homeland = planet.name;
      }
    });

    if (homeland == "") {
      setCurrentPlanet(`${pessoa.name} não possui planeta natal :(`);
    }
  }

  return (
    <Main>
      <span>StarWars - Pessoas e suas terras natais</span>
      <Container>
        {!planets.length || !pessoas.length ? (
          "Aguarde, carregando dados da API..."
        ) : (
          <PlanetsDiv>
            <span>Selecione um personagem.</span>
            <ul>
              {pessoas ? (
                <>
                  {pessoas.map((pessoa, i) => {
                    return (
                      <button onClick={() => showPpl(pessoa)} key={i}>
                        {pessoa.name}
                      </button>
                    );
                  })}
                </>
              ) : (
                "não"
              )}
            </ul>
          </PlanetsDiv>
        )}
        <PeopleDiv>
          <div>Olá!</div>
          <div>
            {currentPlanet ? currentPlanet : "Clique em um personagem ao lado"}
          </div>
          <aside>
            <button onClick={() => setCurrentPlanet("")}>Limpar</button>
            <button
              onClick={() =>
                setFavorites((favorites) => [...favorites, currentPlanet])
              }
            >
              Favoritar
            </button>
          </aside>
        </PeopleDiv>
      </Container>
    </Main>
  );
}
