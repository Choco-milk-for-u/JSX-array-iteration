import createJSX from "../createJSX";
import beforeIndex from "../beforeIndex";
import postCreateJSX from "../postCreateJSX";
import none from "./none";
import optionsResolver from "./optionsResolver";

function giveValue(data) {
  if (!Array.isArray(data) && typeof data === "object") {
    return Object.values(data)[0];
  } else if (Array.isArray(data)) {
    return data;
  }
}

export default function indexForJSX({
  isTrue,
  startWithIndex,
  roof,
  intoArray,
  Block,
  props,
  children,
  options,
  staticValue,
}) {
  let data = [];

  if (!isTrue) {
    for (let index = startWithIndex; index < roof; index++) {
      const { key, times } = optionsResolver({ options, staticValue, index });
      const current = [];
      for (let j = 0; j < roof; j++) {
        const array = giveValue(intoArray[j]);
        if (array) {
          current.push(array[index]);
        }
      }
      const isArray = Array.isArray(Block)
        ? beforeIndex({ currentIndex: index, Block })
        : Block;
      const element = createJSX({
        Block: isArray,
        props,
        index,
        children,
        current: current,
        key: key ? key + index : false,
      });
      data.push(postCreateJSX({ times, element }));
    }
  } else {
    data.push(
      none({
        roof,
        startWithIndex,
        Block,
        props,
        children,
        intoArray,
        options,
        staticValue,
      })
    );
  }
  return data;
}
