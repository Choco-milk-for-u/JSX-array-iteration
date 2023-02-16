export default function renderData(jsx) {
  if (jsx.length < 0) return null;
  
  let current = [];
  for (let index = 0; index < jsx.length; index++) {
    current.push(jsx[index]);
  }
  return current;
}
