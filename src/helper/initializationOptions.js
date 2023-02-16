export function initialOptions(option) {
  return {
    indexForJSX: option.indexForJSX !== undefined ? option.indexForJSX : true,
    key: option.key ? { searchKey: option.key.searchKey, arr: option.key.arr } : {searchKey: null, arr: null},
    fun: option.fun,
    renderTimes: {searchTimes: null, arr: null}
  };
}
export function initialOptionsMany(option) {
  return {
    indexForJSX: option.indexForJSX !== undefined ? option.indexForJSX : true,
    key: option.key ? { searchKey: option.key.searchKey, arr: option.key.arr } : {searchKey: null, arr: null},
    fun: option.fun,
    priority: option.priority || "staticValue",
    renderTimes: option.renderTimes ? { searchTimes: option.renderTimes.searchTimes, arr: option.renderTimes.arr } : {searchTimes: null, arr: null},
  };
}
