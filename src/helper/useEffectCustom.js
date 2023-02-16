import { useEffect } from "react";
import ifMany from "./ifMany";
import indexForJSX from "./options/indexForJSX";
import none from "./options/none";

export function useEffectCustom({
  startWithIndex,
  staticValue,
  times,
  Block,
  props,
  children,
  options,
  setJSX,
  many = false,
}) {
  let data = null;
  useEffect(() => {
    const { roof, intoArray } = ifMany({
      many,
      Block,
      staticValue,
      options,
      times,
    });
    if (!staticValue) {
      data = none({
        roof,
        startWithIndex,
        Block,
        props,
        children,
        options,
        intoArray,
        staticValue,
      });
    } else {
      if (!options) {
        data = indexForJSX({
          isTrue: true,
          startWithIndex,
          Block,
          children,
          intoArray,
          roof,
          props,
          options,
          staticValue,
        });
      } else {
        data = indexForJSX({
          isTrue: options.indexForJSX,
          startWithIndex,
          Block,
          children,
          intoArray,
          roof,
          props,
          options,
          staticValue,
        });
      }
    }
    return () => setJSX((prev) => [...prev, data]);
  }, []);
}
