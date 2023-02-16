import keyFinder from "../keyFinder";

export default function optionsResolver({ options, staticValue, index }) {
  let key = false;
  let times = null;

  if (options.fun) {
    options.fun();
  }
  const searchKey = options.key.searchKey;
  const arrKey = options.key.arr;
    if (searchKey || arrKey) {
      const isKeyArr = arrKey ? arrKey[index] : false;
      key = isKeyArr
        ? isKeyArr
        : staticValue ? keyFinder({ staticValue, neededKey: options.key.searchKey, index }) : false;
    }
    const searchTimes = options.renderTimes.searchTimes;
    const arrTimes = options.renderTimes.arr;
    if (searchTimes || arrTimes) {
      const isTimesArr = arrTimes ? arrTimes[index] : false;
      times = isTimesArr
        ? isTimesArr
        : staticValue ? keyFinder({ staticValue, neededKey: searchTimes, index }) : null;
    }
  return { key, times };
}