export default function filter(arr) {
    const filtered = arr.filter((value) => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          return value;
        }
      } else {
        if (value) {
          return value;
        }
      }
    });
    return filtered;
  }