export default function keyFinder({
  staticValue,
  neededKey,
  index,
  layer = -1,
  currentIndex = undefined,
}) {
  layer++;
  const current = staticValue[neededKey];
  if (current) {
    const isCurrentArray = Array.isArray(current);
    return isCurrentArray ? current[index] : current;
  }
  const isArray = Array.isArray(staticValue);
  if (isArray) {
    for (let mainIndex = 0; mainIndex < staticValue.length; mainIndex++) {
      const current = staticValue[mainIndex];
      const value = keyFinder({
        staticValue: current,
        neededKey,
        index,
        layer,
        currentIndex: mainIndex,
      });

      const neededIndex = currentIndex !== undefined ? currentIndex : mainIndex;
      const both = layer === 0 ? (index === neededIndex ? true : false) : true;
      if (value && both) {
        return value;
      }
    }
  } else if (!isArray && typeof staticValue === "object") {
    let newIndex = 0;
    for (let key in staticValue) {
      let current = staticValue[key];
      if (key === neededKey) {
        current = staticValue;
      }
      const value = keyFinder({
        staticValue: current,
        neededKey,
        index,
        currentIndex: newIndex,
        layer,
      });
      const both = layer === 0 ? (index === newIndex ? true : false) : true;
      if (value && both) {
        return value;
      }
      newIndex++;
    }
  }
  return false;
}
