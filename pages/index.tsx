import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return <>
    <h1>Home {counter}</h1>
    <button onClick={() => setCounter(prev => prev + 1)}>+</button>
  </>;
}

export default Home;
