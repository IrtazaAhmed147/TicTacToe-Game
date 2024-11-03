let box = document.querySelectorAll(".box")
let turnO = true;
let container = document.getElementById("game-container")
let btnCount = 0;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

document.getElementById("turnFor").innerHTML = `Turn for "O"`

box.forEach(box => {
    box.addEventListener('click', function () {
        btnCount += 1
        console.log(btnCount)

        if (turnO === true) {
            box.innerHTML = "O"
            document.getElementById("turnFor").innerHTML = `Turn for "X"`
            turnO = false;

            // box.ariaDisabled

        } else if (turnO === false) {
            box.innerHTML = "X"
            document.getElementById("turnFor").innerHTML = `Turn for "O"`
            turnO = true;
        }

        box.disabled = true

        checkWinner();
        checkDraw(btnCount);


    })
})


let scoreplx = 0;
let scoredrw = 0;
let scoreplyO = 0;




let checkWinner = () => {
    for (pattern of winPatterns) {


        let pos1 = box[pattern[0]].innerText
        let pos2 = box[pattern[1]].innerText
        let pos3 = box[pattern[2]].innerText


        // console.log(btnCount)
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("winner")
                if (pos1 == 'O') {
                    scoreplyO += 1
                    document.getElementById("Winner").innerHTML = `Winner "${pos1}"`
                    document.getElementById("resBox").classList.add('winner')
                    document.getElementById('scoreplyO').innerHTML = `${scoreplyO}`
                    btnCount = 0
                }
                else if (pos1 == 'X') {
                    scoreplx += 1
                    document.getElementById("Winner").innerHTML = `Winner "${pos1}"`
                    document.getElementById("resBox").classList.add('winner')
                    document.getElementById('scoreplx').innerHTML = `${scoreplx}`
                    btnCount = 0
                }

                box.forEach(boxes => {
                    boxes.disabled = true

                })
                return
            }
        }
    }
    if (btnCount === 9) {
        scoredrw += 1;
        document.getElementById('Winner').innerHTML = `Draw`;
        document.getElementById('scoredrw').innerHTML = `${scoredrw}`;
        document.getElementById("resBox").classList.add('winner');
        btnCount = 0
        box.forEach(boxes => {
            boxes.disabled = true;
        });
    }
}

function reset() {
    box.forEach(boxes => {
        boxes.innerHTML = " "
        boxes.disabled = false
        document.getElementById("turnFor").innerHTML = `Turn for "O"`
        document.getElementById("Winner").innerHTML = " "
        document.getElementById("resBox").classList.remove('winner')

    })
    document.getElementById('scoredrw').innerHTML = `0`;
    document.getElementById('scoreplx').innerHTML = `0`
    document.getElementById('scoreplyO').innerHTML = `0`

}
function newGame() {
    box.forEach(boxes => {
        boxes.innerHTML = " "
        boxes.disabled = false
        document.getElementById("turnFor").innerHTML = `Turn for "O"`
        document.getElementById("Winner").innerHTML = " "
        document.getElementById("resBox").classList.remove('winner')

    })
}

function checkDraw() {


    // box.every(cell => cell !== "")
    // console.log("draw")


}