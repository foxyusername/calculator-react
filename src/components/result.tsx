interface ResultProps {
  temperature: number;
  timezone: string;
}

export const Result: React.FC<ResultProps> = ({ temperature, timezone }) => {
  return (
    <>
      {temperature ? (
        <div id="result_div">
          <h2 style={{ color: "black" }}>
            temperature: {temperature} {temperature > 0 ? "°C" : null}
          </h2>
          {temperature > 7 ? (
            <h2 style={{ color: "black" }}>weather: sunny</h2>
          ) : temperature < 7 ? (
            <h2 style={{ color: "black" }}>weather: cloudy</h2>
          ) : null}
          {timezone ? (
            <h2 style={{ color: "black" }}>TimeZone: {timezone}</h2>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
