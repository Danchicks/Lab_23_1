function findString(str, search) {
    const index = str.indexOf(search);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }
  
  const str = 'aboba jkhdsa hffd jfj fdhg ';
  const search = 'aboba';
  const isFound = findString(str, search);
  console.log(isFound); // true
  