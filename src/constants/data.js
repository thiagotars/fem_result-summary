import reaction from "../assets/reaction.svg";
import memory from "../assets/memory.svg";
import verbal from "../assets/verbal.svg";
import visual from "../assets/visual.svg";

export const items = [
  {
    id: 1,
    name: "Reaction",
    score: 80,
    image: reaction,
    backgroundColor: "rgba(255, 87, 87, 0.1)",
    fontColor: "rgb(255, 87, 87)",
  },
  {
    id: 2,
    name: "Memory",
    score: 92,
    image: memory,
    backgroundColor: "rgba(255, 176, 31, 0.1)",
    fontColor: "rgb(255, 176, 31)",
  },
  {
    id: 3,
    name: "Verbal",
    score: 61,
    image: verbal,
    backgroundColor: "rgba(0, 189, 145, 0.1)",
    fontColor: "rgb(0, 189, 145)",
  },
  {
    id: 4,
    name: "Visual",
    score: 72,
    image: visual,
    backgroundColor: "rgba(17, 37, 212, 0.1)",
    fontColor: "rgb(17, 37, 212)",
  },
];
