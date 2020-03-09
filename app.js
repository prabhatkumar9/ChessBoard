console.log("Welcome to chess_GAME")
// queen object
queen = {
    direction: "S",
    position: {
        xcor: 4,
        ycor: 4
    }
}

// Default position
console.log("Default position of queen: " + queen.position.xcor, queen.position.ycor);


// function to update position
function updatePosition(x, y) {
    queen.position.xcor = x;
    queen.position.ycor = y;
}


// Single step move function
function moveforward(direction) {
    // direction = queen.direction;
    switch (direction) {
        case "S":
            if (queen.position.ycor > 0 && queen.position.ycor < 8) {
                queen.position.ycor = queen.position.ycor - 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "N":
            if (queen.position.ycor >= 0 && queen.position.ycor < 7) {
                queen.position.ycor = queen.position.ycor + 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "E":
            if (queen.position.xcor >= 0 && queen.position.xcor < 7) {
                queen.position.xcor = queen.position.xcor + 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "W":
            if (queen.position.xcor > 0 && queen.position.xcor < 8) {
                queen.position.xcor = queen.position.xcor - 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "SW":
            if (queen.position.ycor > 0 && queen.position.ycor < 8) {
                if (queen.position.xcor > 0 && queen.position.xcor < 8) {
                    let x = queen.position.xcor - 1;
                    let y = queen.position.ycor - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;

        case "SE":
            if (queen.position.xcor >= 0 && queen.position.xcor < 7) {
                if (queen.position.ycor > 0 && queen.position.ycor <= 7) {
                    let x = queen.position.xcor + 1;
                    let y = queen.position.ycor - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;

        case "NE":
            if (queen.position.xcor >= 0 && queen.position.xcor < 7) {
                if (queen.position.ycor >= 0 && queen.position.ycor < 7) {
                    let x = queen.position.xcor + 1;
                    let y = queen.position.ycor + 1;
                    updatePosition(x, y);
                }

            } else {
                console.log("Out of order move.");
            }
            break;

        case "NW":
            if (queen.position.xcor > 0 && queen.position.ycor < 7) {
                if (queen.position.xcor <= 7 && queen.position.ycor >= 0) {
                    let x = queen.position.xcor - 1;
                    let y = queen.position.ycor + 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;
    }
}

// let s = changeDirection("S")
// moveforward(s);



//  changeDirection function
function changeDirection(direction) {
    let dir = direction
    queen.direction = dir;
    return dir;
}


// JumpForward Function 
function jumpMoveForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    switch (direction) {
        case "N":
            temp = queen.position.ycor + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.ycor = queen.position.ycor + Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "S":
            temp = queen.position.ycor - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.ycor = queen.position.ycor - Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "E":
            temp = queen.position.xcor + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.xcor = queen.position.xcor + Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "W":
            temp = queen.position.xcor - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.xcor = queen.position.xcor - Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "NE":
            temp = queen.position.ycor + Steps;
            temp1 = queen.position.xcor + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.ycor = queen.position.ycor + Steps;
                    queen.position.xcor = queen.position.xcor + Steps;
                }
            }
            break;

        case "SE":
            temp = queen.position.ycor - Steps;
            temp1 = queen.position.xcor + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.ycor = queen.position.ycor - Steps;
                    queen.position.xcor = queen.position.xcor + Steps;
                }
            }
            break;

        case "NW":
            temp = queen.position.ycor + Steps;
            temp1 = queen.position.xcor - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.ycor = queen.position.ycor + Steps;
                    queen.position.xcor = queen.position.xcor - Steps;
                }
            }
            break;

        case "SW":
            temp = queen.position.ycor - Steps;
            temp1 = queen.position.xcor - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.ycor = queen.position.ycor - Steps;
                    queen.position.xcor = queen.position.xcor - Steps;
                }
            }
            break;

    }
}


//testing>

let north = changeDirection("N");
jumpMoveForward(north,3);
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let northeast = changeDirection("NE");
jumpMoveForward(northeast,2)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let northwest = changeDirection("NW");
jumpMoveForward(northwest,2)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let south = changeDirection("S");
jumpMoveForward(south,3)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let southeast = changeDirection("SE");
jumpMoveForward(southeast,1)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let southwest = changeDirection("SW");
jumpMoveForward(southwest,3)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let east = changeDirection("E");
jumpMoveForward(east,2)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);

let west = changeDirection("W");
jumpMoveForward(west,3)
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);
