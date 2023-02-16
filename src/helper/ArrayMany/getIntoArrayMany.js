import startMapping from "../getIntoArray/startMapping";

export default function getIntoArrayMany(staticValue, options) {
  let data = null;
  if (staticValue) {
    const returnArray = Array.isArray(staticValue) ? staticValue : false;
    const searchKey = options.key.searchKey;
    const searchTimes = options.renderTimes.searchTimes;
    if (searchKey || searchTimes) {
      const intoMapping = returnArray || Object.entries(staticValue);
      const deepClone = JSON.parse(JSON.stringify(intoMapping));

      const optionsTimes = [options.key.searchKey, options.renderTimes.searchTimes];
      const type = typeof staticValue === "object" && !returnArray ? "object" : "array";
      let currentData = null;
      for (let index = 0; index < optionsTimes.length; index++) {
        const current = optionsTimes[index];
        if (current) {
          currentData = startMapping({
            neededKey: current,
            data: currentData ? currentData : deepClone,
            type: type,
            firstLayer: true,
          });
        }
      }
      data = currentData;
    } else {
      data = returnArray || Object.values(staticValue);
    }
  }
  return data;
}
