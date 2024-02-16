import { useState } from "react";
import "./styles.css";
import thankyouimg from "./images/illustration-thank-you.svg";
import iconstar from "./images/icon-star.svg";

export default function App() {
  const [rating, setRating] = useState();
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleClick = (e) => {
    const selectedValue = e.target.value;
    setRating(selectedValue);
    const radioButtons = document.getElementsByClassName("circle");
    const radioArray = Array.from(radioButtons).slice(1);

    radioArray.forEach((button) => {
      if (button.value === selectedValue) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  };

  const handleSubmit = () => {
    rating ? setSubmitClicked(true) : setSubmitClicked(false);
  };

  return (
    <div className="App">
      {!submitClicked ? (
        <div className="card-front">
          <div className="circle star-div">
            <img src={iconstar} alt="icon star" />
          </div>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="buttons-div">
            <button
              className="circle"
              value="1"
              onClick={(e) => handleClick(e)}
            >
              1
            </button>
            <button
              className="circle"
              value="2"
              onClick={(e) => handleClick(e)}
            >
              2
            </button>
            <button
              className="circle"
              value="3"
              onClick={(e) => handleClick(e)}
            >
              3
            </button>
            <button
              className="circle"
              value="4"
              onClick={(e) => handleClick(e)}
            >
              4
            </button>
            <button
              className="circle"
              value="5"
              onClick={(e) => handleClick(e)}
            >
              5
            </button>
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      ) : (
        <div className="card-front back">
          <div>
            <img src={thankyouimg} alt="thankyouimg" />
          </div>
          <div className="yourrating">You selected {rating} out of 5</div>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/KamiyaGaikwad"
          target="_blank"
        >
          Kamiya Gaikwad
        </a>
        .
      </div>
    </div>
  );
}
