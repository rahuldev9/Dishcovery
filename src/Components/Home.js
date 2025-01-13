import React from "react";

function Home() {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "60vh" }}>
        <img
          src="07b9276c-0d84-4c63-9b12-b4067079eb0e.jpg"
          alt="back"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image fills the div without distortion
            objectPosition: "center", // Centers the image within the div
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity (you can adjust the opacity)
            pointerEvents: "none", // Ensures the overlay doesn't block interactions with the image below it
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%", // Centers the text vertically
            left: "50%", // Centers the text horizontally
            transform: "translate(-50%, -50%)", // Ensures perfect centering
            color: "white", // Text color (white for contrast with black background)
            fontSize: "2rem", // Adjust the font size as needed
            fontWeight: "bold", // Make the text bold
            textAlign: "center", // Center align the text horizontally
            zIndex: 1, // Ensure the text is on top of the overlay
            width: "100%",
          }}
        >
          <p style={{ color: "white", fontSize: "20px" }}>Recipe of the Day</p>
          <h4>Enter ingredients, get recipes, cook with ease!</h4>
          <p style={{ color: "white", fontSize: "15px" }}>
            Find recipes based on what you have! Simply input your available
            ingredients, and we'll show you a variety of dishes you can make
          </p>
        </div>
      </div>
      <div>
        <h1 style={{ color: "white" }}>
          Unlock the{" "}
          <strong style={{ color: "#ca6702" }}>recipe journey!</strong>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",

          justifyContent: "space-evenly",
        }}
      >
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="veg.png"
                alt="veg"
                style={{ height: "100px", width: "100px", margin: "20px" }}
              />
            </div>
            <div class="flip-card-back">
              <h1>STEP 1</h1>
              <h4>Ingredients in, recipes out!</h4>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="list.png"
                alt="veg"
                style={{ height: "100px", width: "100px", margin: "20px" }}
              />
            </div>
            <div class="flip-card-back">
              <h1>STEP 2</h1>
              <h4>Endless dishes from available ingredients!</h4>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="make.png"
                alt="veg"
                style={{ height: "100px", width: "100px", margin: "20px" }}
              />
            </div>
            <div class="flip-card-back">
              <h1>STEP 3</h1>
              <h4>How to make?</h4>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="chef.png"
                alt="veg"
                style={{ height: "100px", width: "100px", margin: "20px" }}
              />
            </div>
            <div class="flip-card-back">
              <h1>STEP 4</h1>
              <p>Ready, Set, Cook!</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Turn ingredients into magic!</h1>
      <div>
        <div>
        <a href="/">
              <img
                src="favicon.png"
                alt="veg"
                style={{ height: "90px", width: "90px",position:'relative',top:'50px'}}
                
              />
            </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height={200} width={200}>
        <g style={{order: -1}}>
          <polygon transform="rotate(45 100 100)" strokeWidth={1} stroke="#d3a410" fill="none" points="70,70 148,50 130,130 50,150" id="bounce" />
          <polygon transform="rotate(45 100 100)" strokeWidth={1} stroke="#d3a410" fill="none" points="70,70 148,50 130,130 50,150" id="bounce2" />
          <polygon transform="rotate(45 100 100)" strokeWidth={2} stroke fill="#414750" points="70,70 150,50 130,130 50,150" />
          <polygon strokeWidth={2} stroke fill="url(#gradiente)" points="100,70 150,100 100,130 50,100" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
              <stop style={{stopColor: '#1e2026', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#414750', stopOpacity: 1}} offset="60%" />
            </linearGradient>
          </defs>
          <polygon transform="translate(20, 31)" strokeWidth={2} stroke fill="#b7870f" points="80,50 80,75 80,99 40,75" />
          <polygon transform="translate(20, 31)" strokeWidth={2} stroke fill="url(#gradiente2)" points="40,-40 80,-40 80,99 40,75" />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(180 100 100) translate(20, 20)" strokeWidth={2} stroke fill="#d3a410" points="80,50 80,75 80,99 40,75" />
          <polygon transform="rotate(0 100 100) translate(60, 20)" strokeWidth={2} stroke fill="url(#gradiente3)" points="40,-40 80,-40 80,85 40,110.2" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(45 100 100) translate(80, 95)" strokeWidth={2} stroke fill="#ffe4a1" points="5,0 5,5 0,5 0,0" id="particles" />
          <polygon transform="rotate(45 100 100) translate(80, 55)" strokeWidth={2} stroke fill="#ccb069" points="6,0 6,6 0,6 0,0" id="particles" />
          <polygon transform="rotate(45 100 100) translate(70, 80)" strokeWidth={2} stroke fill="#fff" points="2,0 2,2 0,2 0,0" id="particles" />
          <polygon strokeWidth={2} stroke fill="#292d34" points="29.5,99.8 100,142 100,172 29.5,130" />
          <polygon transform="translate(50, 92)" strokeWidth={2} stroke fill="#1f2127" points="50,50 120.5,8 120.5,35 50,80" />
        </g>
      </svg>
      </div>
    </div>
  );
}

export default Home;

