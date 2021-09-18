import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { favoriteUpdate, favoriteReset } from "../store/actions/favorites/";
import {
  Main,
  Container,
  PlanetsDiv,
  PeopleDiv,
  FavoritesUl,
} from "../styles/styled";
import { RootState } from "../store/reducers";
const axios = require("axios");

export default function Home() {
  const [planets, setPlanets] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState("");
  // const [favorites, setFavorites] = useState([]);
  const [showFav, setShowFav] = useState(false);

  const favs = useSelector((state: RootState) => state.favorites.favorites);
  // console.log(favs[0]);

  const dispatch = useDispatch();

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

  function favoritar() {
    if (!favs.includes(currentPlanet)) {
      // setFavorites((favorites) => [...favorites, currentPlanet]);
      dispatch(favoriteUpdate(currentPlanet));
    } else {
      console.log("Favorito já adicionado");
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
            <button
              onClick={() => {
                setCurrentPlanet("");
                // setFavorites([""]);
                dispatch(favoriteReset());
              }}
            >
              Limpar
            </button>
            <button onClick={() => favoritar()}>Favoritar</button>
            <button onClick={() => setShowFav(!showFav)}>Ver favoritos</button>
          </aside>
        </PeopleDiv>
      </Container>
      {showFav ? (
        <FavoritesUl>
          {favs.map((favorite, i) => {
            return <li key={i}>{favorite}</li>;
          })}
        </FavoritesUl>
      ) : null}
    </Main>
  );
}
