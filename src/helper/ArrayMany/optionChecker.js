export default function optionChecker({staticValue, intoArray, options, Block}){
    if (staticValue) {
      if (options.priority === "staticValue") {
        return intoArray.length;
      } else if (options.priority === "Block") {
        return Block.length;
      } else {
        throw new Error(
          'Please check documintation page. Section - "options.priority"'
        );
      }
    } else {
      return Block.length;
    }
  };