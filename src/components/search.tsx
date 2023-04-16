import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Result } from "./result";

export const Search = () => {
  const [location, setLocation] = useState("");
const [click,setClick]=useState(true);
const [input,setInput]=useState(false);

function onClick(){
  if(click){
setClick(false);
  }else{
    setClick(true);
  }
};
  function change(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
     
  }

  const { data, isLoading, isError, refetch } = useQuery(
    ["weather",click],
    async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_max,sunrise&timezone=${location}`
      );
      const json = await response.json();
      return json;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }

  const temperature = data?.hourly?.temperature_2m[0];
  const timezone = data?.timezone;

  return (
    <div id="input_field">
     <div id="input">
    <input type="text" placeholder="Continent/City" onChange={change} id="input"></input>
      <button id="submit_btn" onClick={onClick}>
      </button>
      </div>

      <Result temperature={temperature} timezone={timezone} />
    </div>
  );
};
