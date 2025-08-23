import { useState } from "react";
import "./Joke.css";

export default function Joke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(data);
    setLoading(false);
  }

  return (
    <div className="joke-container">
      <div className="joke-card">
        <h2>🎭 Random Joke Generator</h2>
        <button className="joke-btn" onClick={fetchJoke}>
          {loading ? "Loading...😂" : "Get Joke"}
        </button>

        <div className="joke-content">
          {!loading && !joke && <p>Click the button to get best jokes now!!</p>}
          {joke && !loading && (
            <>
              <h3 className="setup">{joke.setup}</h3>
              <h3 className="punchline">{joke.punchline}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
