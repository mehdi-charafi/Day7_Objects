let players = [{name: "Omar", score: 35}, {name: "Sara", score: 15}, {name: "Lina", score: 56}]
let temp = {}
let leaderboard = [...players]

for (let i = 0; i < leaderboard.length; i++) {
    for (let j = i+1; j < leaderboard.length; j++) {
        if (leaderboard[i].score > leaderboard[j].score) {
            temp = leaderboard[i]
            leaderboard[i] = leaderboard[j]
            leaderboard[j] = temp
        }
    }
}

console.log([`${leaderboard[0].name}, ${leaderboard[1].name}, ${leaderboard[2].name}`])
