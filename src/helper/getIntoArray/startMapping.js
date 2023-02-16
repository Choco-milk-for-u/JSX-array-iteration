import filter from './filter';

export default function startMapping({ data, neededKey, type, firstLayer }) {
    if (type === "object" && firstLayer) {
      const temp = data;
      data = [];
      temp.map((prop) => {
        if (prop[0] !== neededKey) {
          data.push(prop[1]);
        }
      });
      firstLayer = false;
    }
    if (Array.isArray(data)) {
      if (type === "object" && data.includes(neededKey)) {
        return null;
      }
      const deletedArray = data.map((prop) => {
        return startMapping({ data: prop, neededKey, type });
      });
      return filter(deletedArray);
    } else if (typeof data === "object") {
      const keys = Object.keys(data);
      if (keys.includes(neededKey)) {
        delete data[neededKey];
        return Object.values(data).flat(1);
      } else {
        const deletedArray = keys.map((prop) => {
          return startMapping({ data: data[prop], neededKey, type });
        });
        return filter(deletedArray.flat(1));
      }
    } else {
      return data;
    }
  }