import { cloneElement } from "react";

export default function createJSX({
  Block,
  props,
  index,
  children = null,
  current = null,
  key = null,
}) {
  const newProps = {
    neededCurrent: current,
    neededIndex: index,
    key: key ? key : undefined,
    ...props,
  };
  const intoChildren =
    children && Block.props.children
      ? children + Block.props.children
      : children || Block.props.children;
  return cloneElement(Block, newProps, intoChildren);
}
