import useFetch from "./useFetch";
import { useState, useEffect } from "react";
export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  useEffect(() => {
    if (!loading) {
      setDisabled(false);
    }
  }, [loading]);
  return (
    <div className="App">
      <button disabled={loading || disabled} onClick={handleClick}>
        Click
      </button>
      {data ? (
        <div>{JSON.stringify(data, null, 2)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
