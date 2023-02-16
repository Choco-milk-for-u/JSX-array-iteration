export default function postCreateJSX({times, element}){
    if (!times) return element;
    
    let jsx = [];
    for (let index = 0; index < times; index++) {
      jsx.push(element);
    }
    return jsx;
}
