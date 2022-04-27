const between = document.querySelector(".between")
const btnAgain = document.querySelector(".btn.again")
const number = document.querySelector(".number")
const btnCheck = document.querySelector(".btn.check")
const score = document.querySelector(".score")
const highScore = document.querySelector(".highscore")
const guess = document.querySelector(".guess")
const againBtn = document.querySelector(".btn.again")

againBtn.addEventListener("click", function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    const correctNumber = getRandomInt(20)
    return correctNumber
})

btnCheck.addEventListener("click", function (correctNumber) {
    console.log(correctNumber)
})