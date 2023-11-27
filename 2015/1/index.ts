import { readFileSync } from "fs"

const input = readFileSync("./2015/1/input.txt", "utf8")

let floor = 0

const answer = input.split("").forEach((char, index) => {
  if (char === "(") floor++
  else if (char === ")") floor--

  if (floor === -1) console.log(index + 1)
})

floor
