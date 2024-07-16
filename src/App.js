import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [simpsons, setSimpsons] = useState();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    setSimpsons(data);

    // setTimeout(() => {
    //   getApiData();
    // }, 5000);
  };

  useEffect(
    () => {
      getApiData();
    },
    [] //means return once
  );
  return (
    simpsons &&
    simpsons.map((char) => {
      return <p>{char.quote}</p>;
    })
  );
};

export default App;
