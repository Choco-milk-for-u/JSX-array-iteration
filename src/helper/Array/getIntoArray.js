import startMapping from '../getIntoArray/startMapping';

export default function getIntoArray(staticValue, options) {
  let data = null;
  if (staticValue) {
    const key = options.key.searchKey;
    const returnArray = Array.isArray(staticValue) ? staticValue : false;
    if (key) {
      const intoMapping = returnArray || Object.entries(staticValue);
      const type =
        typeof staticValue === "object" && !returnArray ? "object" : "array";
      data = startMapping({
        neededKey: key,
        data: JSON.parse(JSON.stringify(intoMapping)),
        type: type,
        firstLayer: true,
      });
    } else {
      data = returnArray || Object.values(staticValue);
    }
  }
  return data;
}
