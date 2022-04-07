import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Box({ number }) {
  var good = 0;
  var bad = 0;
  var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var index = 0;
  let question = number + " x ";

  const [again, setAgain] = useState(false);
  const [form, setForm] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    shuffle(table);
    setArray(table);
    let text = document.getElementById("myText");
    text.innerText = 0;
  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function handleClick(e) {
    var text = document.getElementById("myText");

    if (parseInt(e.target.innerHTML) === number * parseInt(text.innerHTML)) {
      good++;
    } else {
      bad++;
    }

    hekky(bad);

    console.log("index " + index);
    text.innerHTML = array[index];
    index = index + 1;
  }

  function hekky(bad) {
    let head = document.querySelector("#head");
    let body = document.querySelector("#body");
    let Rarm = document.querySelector("#Rarm");
    let Larm = document.querySelector("#Larm");
    let Rleg = document.querySelector("#Rleg");
    let Lleg = document.querySelector("#Lleg");

    if (bad === 1) {
      head.style.visibility = "visible";
    } else if (bad === 2) {
      body.style.visibility = "visible";
    } else if (bad === 3) {
      Rarm.style.visibility = "visible";
    } else if (bad === 4) {
      Larm.style.visibility = "visible";
    } else if (bad === 5) {
      Lleg.style.visibility = "visible";
    } else if (bad === 6 || (bad > 0 && index > 9)) {
      Rleg.style.visibility = "visible";
      setAgain(true);
    }  else if (bad === 0 && index > 9) {
      setForm(true);
    }
  }

  function sendMail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hw9vrkf",
        "template_ouasiwd",
        e.target,
        "y4TaoYEi1Wuq2BNEz"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function refreshPage() {
    window.location.reload();
  }

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="questionBox">
      {/*  */}
      <svg height="250" width="200" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        <circle
          style={{ visibility: "hidden" }}
          id="head"
          cx="140"
          cy="70"
          r="20"
        />
        {/* <!-- Body --> */}
        <line
          style={{ visibility: "hidden" }}
          id="body"
          x1="140"
          y1="90"
          x2="140"
          y2="150"
        />
        {/* <!-- Arms --> */}
        <line
          style={{ visibility: "hidden" }}
          id="Rarm"
          x1="140"
          y1="120"
          x2="120"
          y2="100"
        />
        <line
          style={{ visibility: "hidden" }}
          id="Larm"
          x1="140"
          y1="120"
          x2="160"
          y2="100"
        />
        {/* <!-- Legs --> */}
        <line
          style={{ visibility: "hidden" }}
          id="Rleg"
          x1="140"
          y1="150"
          x2="120"
          y2="180"
        />
        <line
          style={{ visibility: "hidden" }}
          id="Lleg"
          x1="140"
          y1="150"
          x2="160"
          y2="180"
        />
      </svg>
      {/*  */}

      {again ? (
        <button className="reload" type="button" onClick={refreshPage}>
          Try agin
        </button>
      ) : form ? (
        <div className="submitForm">
          <h4>
            You have performed great. Mail your achievement to your teacher.
          </h4>
          <form className="form" onSubmit={sendMail}>
            <div className="formBox">
              <label for="Yname">Your Name</label>
              <input type="text" name="your_name" id="Yname" />
            </div>
            <div className="formBox">
              <label for="Yemail">Your email address</label>
              <input type="email" name="your_email" id="Yemail" />
            </div>
            <div className="formBox">
              <label for="Tname">Your teacher's name</label>
              <input type="text" name="teacher_name" id="Tname" />
            </div>
            <div className="formBox">
              <label for="Temail">Your teacher's email</label>
              <input type="email" name="teacher_mail" id="Temail" />
            </div>
            <div className="formBox">
              <label for="msg">Enter your message</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <div className="formBox">
              <button onClick={() => {
                alert("mail has been sent to your teacher.")
              }}>Send</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          {" "}
          <h1 id="question">
            {question} <span id="myText"></span>
          </h1>
          <div id="box">
            {num.map((e) => (
              <button id="myBtn" onClick={handleClick}>
                {number * e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Box;
