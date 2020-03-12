module.exports = function createDreamTeam(arr1) {
  if (arr1 instanceof Array){
    let str = '';
    let arr = [];
    let j = 0;
    for (let i=0; i<arr1.length; i++){
      if (typeof arr1[i] == "string"){
        arr[j] = arr1[i].trim();
        arr[j] = arr[j].toUpperCase();
        j++;
        }
    };

    if (arr.length > 0) {
      arr.sort();

      for (let i=0; i<arr.length; i++){
        if (( arr[i].substring(0,1) >= 'A') &&  (arr[i].substring(0,1) <= 'Z' ) ) {
              str = str + arr[i].substring(0,1);
        }
      };
    };  
    if (str == '') return false;
    else  return str;
  }
  else  return false;
};