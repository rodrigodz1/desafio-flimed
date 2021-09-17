import { useEffect } from "react";
import { Main, Container } from "../styles/styled";
const axios = require("axios");

export default function Home() {
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/people/1`)
      .then(function (response) {
        // handle success
        console.log(response);
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
      <span>StarWars - something</span>
      <Container>div1</Container>
    </Main>
  );
}
