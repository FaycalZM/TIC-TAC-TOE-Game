
var player = "";
var cpu = "";
var winner = "";


let singlePlayerBtn = document.querySelector(".single-player");
let multiPlayerBtn = document.querySelector(".multi-player");

const areSame = (x, y, z) => {
  if ((x === y) && (x === z)) {
    return true
  }
  return false
}

const allOccupied = (x, y, z) => {
  if ((x.innerHTML !== "") && (y.innerHTML !== "") && (z.innerHTML !== "")) {
    return true
  }
  return false
}


let cells = document.getElementsByClassName("scell");
let m_cells = document.getElementsByClassName("mcell");

const clearSinglePlayerBoard = () => {
  for (let c = 0; c < cells.length; c++) { //clearing the board
    cells[c].innerHTML = "";
  }
}
const clearMultiPlayerBoard = () => {
  for (let c = 0; c < m_cells.length; c++) { //clearing the board
    m_cells[c].innerHTML = "";
  }
}

const togglePlayer = () => {
  if (player === "x") {
    player = "o"
  }
  else {
    player = "x"
  }
}

const checkWinner = (cells) => {
  if (allOccupied(cells[0], cells[1], cells[2]) && areSame(cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML)) {
    winner = cells[0].innerHTML;
  }
  if (allOccupied(cells[3], cells[4], cells[5]) && areSame(cells[3].innerHTML, cells[4].innerHTML, cells[5].innerHTML)) {
    winner = cells[3].innerHTML;
  }
  if (allOccupied(cells[6], cells[7], cells[8]) && areSame(cells[6].innerHTML, cells[7].innerHTML, cells[8].innerHTML)) {
    winner = cells[6].innerHTML;
  }
  if (allOccupied(cells[0], cells[3], cells[6]) && areSame(cells[0].innerHTML, cells[3].innerHTML, cells[6].innerHTML)) {
    winner = cells[0].innerHTML;
  }
  if (allOccupied(cells[1], cells[4], cells[7]) && areSame(cells[1].innerHTML, cells[4].innerHTML, cells[7].innerHTML)) {
    winner = cells[1].innerHTML;
  }
  if (allOccupied(cells[2], cells[5], cells[8]) && areSame(cells[2].innerHTML, cells[5].innerHTML, cells[8].innerHTML)) {
    winner = cells[2].innerHTML;
  }
  if (allOccupied(cells[0], cells[4], cells[8]) && areSame(cells[0].innerHTML, cells[4].innerHTML, cells[8].innerHTML)) {
    winner = cells[0].innerHTML;
  }
  if (allOccupied(cells[2], cells[4], cells[6]) && areSame(cells[2].innerHTML, cells[4].innerHTML, cells[6].innerHTML)) {
    winner = cells[2].innerHTML;
  }
}


let home_btns = document.getElementsByClassName("home");
for (let i = 0; i < home_btns.length; i++) {
  const element = home_btns[i];

  element.addEventListener("click", () => {
    document.querySelector(".main-menu").style.display = "initial";
    document.querySelector(".single-player-menu").style.display = "none";
    document.querySelector(".multi-player-menu").style.display = "none";
    document.querySelector(".about-section").style.display = "none";
  })
}



// singlePlayer Mode
singlePlayerBtn.addEventListener("click", () => {

  document.querySelector(".main-menu").style.display = "none";
  document.querySelector(".single-player-menu").style.display = "initial";

  let single_x_btn = document.querySelector(".x-single");
  let single_o_btn = document.querySelector(".o-single");

  let single_btns = document.getElementsByClassName("single-btn");
  for (let i = 0; i < single_btns.length; i++) {
    single_btns[i].addEventListener("click", () => {
      clearSinglePlayerBoard();
      document.getElementById("menu").style.display = "none";
      document.querySelector(".singlePlayerBoard").style.display = "grid";
    })
  }

  if (single_x_btn) {
    single_x_btn.addEventListener("click", () => {
      player = "x";
      cpu = "o";
    })
  }
  else {
    console.log("single_x_btn is undefined / null");
  }


  if (single_o_btn) {
    single_o_btn.addEventListener("click", () => {
      player = "o";
      cpu = "x";
    })
  }
  else {
    console.log("single_o_btn is undefined / null");
  }
});


// single-player cells
for (let i = 0; i < cells.length; i++) {
  let cell = cells[i];
  cell.addEventListener("click", (e) => {

    e.target.innerHTML = player;
    checkWinner(cells);
    if (winner !== "") {

      clearSinglePlayerBoard();
      document.querySelector(".singlePlayerBoard").style.display = "none";
      document.querySelector(".result").style.display = "flex";
      document.querySelector(".result").innerHTML = `<h1>${winner} Won!</h1>`
      winner = "";
      setTimeout(() => {

        document.querySelector(".result").style.display = "none";
        document.getElementById("menu").style.display = "";

        document.querySelector(".main-menu").style.display = "initial";
        document.querySelector(".single-player-menu").style.display = "none";

      }, 1500);

    }
    else {
      setTimeout(() => {
        let full = true;
        for (let j = 0; j < cells.length; j++) {
          const element = cells[j];
          if (element.innerHTML === "") {
            full = false;
          }
        }
        if (!full) {
          let index = Math.floor(Math.random() * 9);
          while (cells[index].innerHTML !== "") {
            index = Math.floor(Math.random() * 9);
          }
          cells[index].innerHTML = cpu;
          checkWinner(cells);
          if (winner !== "") {
            clearSinglePlayerBoard();

            document.querySelector(".singlePlayerBoard").style.display = "none";
            document.querySelector(".result").style.display = "flex";
            document.querySelector(".result").innerHTML = `<h1>${winner} Won!</h1>`
            winner = "";
            setTimeout(() => {

              document.querySelector(".result").style.display = "none";
              document.getElementById("menu").style.display = "";

              document.querySelector(".main-menu").style.display = "initial";
              document.querySelector(".single-player-menu").style.display = "none";

            }, 1500);

          }

        }
        else {
          clearSinglePlayerBoard();
          document.querySelector(".singlePlayerBoard").style.display = "none";
          document.querySelector(".result").style.display = "flex";
          document.querySelector(".result").innerHTML = `<h1>Draw!</h1>`
          setTimeout(() => {
            document.querySelector(".result").style.display = "none";
            document.getElementById("menu").style.display = "";

            document.querySelector(".main-menu").style.display = "initial";
            document.querySelector(".single-player-menu").style.display = "none";

          }, 1500);

        }
      }, 1000);
    }
  })
}

//multiPlayer Mode




multiPlayerBtn.addEventListener("click", () => {
  clearMultiPlayerBoard();
  document.querySelector(".main-menu").style.display = "none";
  document.querySelector(".multi-player-menu").style.display = "initial";

  let multi_x_btn = document.querySelector(".x-multi");
  let multi_o_btn = document.querySelector(".o-multi");
  let multi_btns = document.getElementsByClassName("multi-btn");

  for (let i = 0; i < multi_btns.length; i++) {
    multi_btns[i].addEventListener("click", () => {
      clearMultiPlayerBoard();
      document.getElementById("menu").style.display = "none";
      document.querySelector(".multiPlayerBoard").style.display = "grid";
    })
  }
  multi_x_btn.addEventListener("click", () => {
    player = "x";
  })

  multi_o_btn.addEventListener("click", () => {
    player = "o";
  })



})

//multi Player cells

for (let i = 0; i < m_cells.length; i++) {
  m_cells[i].addEventListener("click", (event) => {
    if (event.target.innerHTML === "") {
      event.target.innerHTML = player;
      checkWinner(m_cells);
      if (winner === "") {
        togglePlayer();
      }
      else {

        clearMultiPlayerBoard();

        document.querySelector(".multiPlayerBoard").style.display = "none";
        document.querySelector(".result").style.display = "flex";
        document.querySelector(".result").innerHTML = `<h1>${winner} Won!</h1>`
        winner = "";
        setTimeout(() => {

          document.querySelector(".result").style.display = "none";
          document.getElementById("menu").style.display = "";
          document.querySelector(".main-menu").style.display = "initial";
          document.querySelector(".multi-player-menu").style.display = "none";

        }, 1500);

      }
    }
    else {
      alert("cell is already taken!")
    }
  })
}


document.querySelector(".about").addEventListener("click", () => {
  let submenus = document.getElementsByClassName("submenu");
  for (let index = 0; index < submenus.length; index++) {
    const element = submenus[index];
    element.style.display = "none";
  }
  document.querySelector(".about-section").style.display = "initial";
})















