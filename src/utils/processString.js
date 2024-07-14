// function to remove '_' and '-' and capitaliza first letter of a string.

function processString(string){
    return string ? string.split(/[-_ ]/).map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : string;
  }

  export default processString;