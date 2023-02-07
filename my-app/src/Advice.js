import React, { useEffect, useState } from "react";
import axios from "axios";

function Advice() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(clicked + 1);
  };

  const fetchData = async () => {
    try {
      await axios.get(`https://api.adviceslip.com/advice`).then((res) => {
        setData(res.data.slip);
      });
    } catch (e) {
      setError(true);
      throw e;
    }
  };

  useEffect(() => {
    fetchData();
  }, [clicked]);

  return (
    <div>
      <div className="container">
        {error ? (
          <div id="error">Something went wrong, please refresh the page</div>
        ) : (
          <div>
            <h2>
              Advice <span>#{data.id}</span>
            </h2>
            <p>{data.advice}</p>
            <img alt="divder" />
            <button onClick={(e) => handleClick(e)}></button>
          </div>
        )}
      </div>
      <footer>
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .Codded by
          <a
            href="https://www.linkedin.com/in/abdulrazzakalsssouki"
            target="_blank"
            rel="noreferrer"
          >
            Abdulrazzak Alsssouki
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Advice;
