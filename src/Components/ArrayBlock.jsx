import { useState } from "react";
import getIntoArray from "../helper/Array/getIntoArray";
import renderData from "../helper/renderData";
import { useEffectCustom } from "../helper/useEffectCustom";
import { initialOptions } from "../helper/initializationOptions";

export default function ArrayBlock({
  Block,
  props = null,
  times = 0,
  startWithIndex = 0,
  staticValue = null,
  children = null,
  options = { indexForJSX: true, key: {searchKey: null, arr: null}, fun: null },
}) {
  const initOptions = initialOptions(options);
  const [jsx, setJSX] = useState([]);

  useEffectCustom({
    setJSX,
    startWithIndex,
    staticValue,
    props,
    Block,
    times,
    options: initOptions,
    children,
  });
  return renderData(jsx);
}
