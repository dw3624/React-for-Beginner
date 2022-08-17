import { useEffect, useState } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("created");
    return byFn;
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>;
  // useEffect(() => {
  //   console.log("created")
  //   return () => console.log("bye")
  // }, [])
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Cleanup