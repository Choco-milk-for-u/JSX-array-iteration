import beforeIndex from "../beforeIndex";
import createJSX from "../createJSX";
import postCreateJSX from "../postCreateJSX";
import optionsResolver from "./optionsResolver";

export default function none({
  roof,
  startWithIndex,
  Block,
  props,
  children,
  intoArray = null,
  options = null,
  staticValue = null,
}) {
  let data = [];
  for (let index = startWithIndex; index < roof; index++) {
    let key,
      times = null;
    ({ key, times } = optionsResolver({ options, staticValue, index }));
    const block = Array.isArray(Block)
      ? beforeIndex({ currentIndex: index, Block })
      : Block;
    const element = createJSX({
      Block: block,
      props,
      index,
      children,
      current: intoArray ? intoArray[index] : null,
      key: key ? key + index : false,
    });
    data.push(postCreateJSX({ times, element }));
  }
  return data;
}
