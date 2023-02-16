export default function postCreateJSX({times, element}){
    if (times) {
        let jsx = [];
        for (let index = 0; index < times; index++) {
          jsx.push(element);
        }
        return jsx;
      } else {
        return element;
      }
}