import { useState } from "react";
import getIntoArrayMany from "../helper/ArrayMany/getIntoArrayMany";
import renderData from "../helper/renderData";
import { useEffectCustom } from "../helper/useEffectCustom";
import { initialOptionsMany } from "../helper/initializationOptions";

export default function ArrayBlockMany({
  Block,
  props = null,
  startWithIndex = 0,
  staticValue = null,
  children = null,
  options = {
    indexForJSX: true,
    key: { searchKey: null, arr: null },
    fun: null,
    priority: "staticValue",
    renderTimes: { searchTimes: null, arr: null },
  },
}) {
  const initOption = initialOptionsMany(options);
  const [jsx, setJSX] = useState([]);

  useEffectCustom({
    setJSX,
    startWithIndex,
    staticValue,
    props,
    Block,
    options: initOption,
    children,
    many: true
  });
  return renderData( jsx );
}
