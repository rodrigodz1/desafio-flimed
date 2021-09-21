import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { favoriteUpdate, favoriteReset } from "../store/actions/favorites/";
import {
  Main,
  Container,
  PlanetsDiv,
  PeopleDiv,
  FavoritesUl,
} from "../styles/styled";
import { RootState } from "../store/reducers";
import { AxiosError, AxiosResponse } from "axios";
const axios = require("axios");

type IPessoa = {
  name: string;
  homeworld: string;
};

type IPlanet = {
  url: string;
  name: string;
};

export default function Home() {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [pessoas, setPessoas] = useState<IPessoa[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState("");
  const [showFav, setShowFav] = useState(false);

  const favs: string[] = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const dispatch = useDispatch();

  const myRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/planets`)
      .then(function (response: AxiosResponse) {
        // handle success
        setPlanets(response.data.results);
      })
      .catch(function (error: AxiosError) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/people`)
      .then(function (response: AxiosResponse) {
        setPessoas(response.data.results);
      })
      .catch(function (error: AxiosError) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  function showPpl(pessoa: IPessoa) {
    let homeland = "";
    planets.forEach((planet: IPlanet) => {
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
          <span>Aguarde, carregando dados da API...</span>
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
              className="clean"
              onClick={() => {
                setCurrentPlanet("");
                // setFavorites([""]);
                dispatch(favoriteReset());
              }}
            >
              <span className="material-icons">cleaning_services</span>
              Limpar
            </button>
            <button className="favorite" onClick={() => favoritar()}>
              <span className="material-icons">star</span>
              Favoritar
            </button>
            <button
              onClick={() => {
                setShowFav(!showFav);
                myRef.current.scrollIntoView();
              }}
            >
              {showFav ? (
                <>
                  <span className="material-icons">visibility</span>
                  Esconder favoritos
                </>
              ) : (
                <>
                  <span className="material-icons">visibility_off</span>
                  Mostrar favoritos
                </>
              )}
            </button>
          </aside>
        </PeopleDiv>
      </Container>
      {showFav ? (
        <FavoritesUl>
          {favs.map((favorite: string, i: number) => {
            return <li key={i}>{favorite}</li>;
          })}
        </FavoritesUl>
      ) : null}
      <footer ref={myRef}></footer>
    </Main>
  );
}
