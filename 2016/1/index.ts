import { readFileSync } from "fs"

const input = readFileSync("./2016/1/input.txt", "utf8")

const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
let dir = 0
let pos = [0, 0]
let seen = new Set<string>()

const inst = input
  .split(", ")
  .map((line) => [line[0], +line.slice(1)] as [string, number])

for (const [curDir, steps] of inst) {
  if (curDir === "R") dir++
  else if (curDir === "L") dir--
  dir = (dir + dirs.length) % dirs.length
  pos = [pos[0] + dirs[dir][0] * steps, pos[1] + dirs[dir][1] * steps]

  if (seen.has(`${pos[0]},${pos[1]}`)) console.log("seen twice", pos)
  seen.add(`${pos[0]},${pos[1]}`)
}

const ans = Math.abs(pos[0]) + Math.abs(pos[1])
ans
