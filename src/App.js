import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [getNew, setGetNew] = useState(0);

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
    [getNew] //means return once
  );
  return (
    <>
      <button
        onClick={() => {
          setGetNew(getNew + 1);
        }}
      >
        Update count
      </button>
      {simpsons &&
        simpsons.map((char) => {
          return <p>{char.quote}</p>;
        })}
    </>
  );
};

export default App;
