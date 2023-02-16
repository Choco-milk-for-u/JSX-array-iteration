import getIntoArray from "./Array/getIntoArray";
import getIntoArrayMany from "./ArrayMany/getIntoArrayMany";
import optionChecker from "./ArrayMany/optionChecker";

export default function ifMany({ many, staticValue, options, Block, times }) {
  let intoArray = null;
  let roof = null;
  if (!Block) {
    throw new Error("you need to fill Block statement");
  }
  if (many) {
    intoArray = getIntoArrayMany(staticValue, options);
    roof = optionChecker({ staticValue, intoArray, options, Block });
  } else {
    if ((!staticValue && !times) || !Block) {
      throw new Error(
        "Please select how many times it should itirate or fill staticValue option"
      );
    }
    intoArray = getIntoArray(staticValue, options);
    roof = times ? times : intoArray.length;
  }
  return { roof, intoArray };
}
