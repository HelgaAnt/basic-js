module.exports = function getSeason(d) {
  if (d == null) return 'Unable to determine the time of year!';
  //if (d instanceof Object) throw new Error();


  if (d instanceof Date){

    if (d.hasOwnProperty('getMonth') )  throw new Error();


    let m =d.getMonth();
    switch (m) {
          case 11:
          case 0:
          case 1:
               sz = 'winter';
          break;
          case 2:
          case 3:
          case 4:
               sz = 'spring';
          break;
          case 5:
          case 6:
          case 7:
               sz = 'summer';
          break;
          case 8:
          case 9:
          case 10:
               sz = 'autumn';
          break;
          default:
                def = 'fall';
    }

//      if (typeof arr1[i] == "string"){
//  throw new Error()
// hasownpropert

    return sz;
  }
  //else return 'Unable to determine the time of year!';
  throw new Error();

};
