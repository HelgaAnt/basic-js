const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if ( typeof sampleActivity != 'string') return false;
  if ( sampleActivity  ===  'undefined' ) return false;
  n = (parseFloat(sampleActivity) > 0)? parseFloat(sampleActivity) : 0;
  if (( n <= 0 ) || ( n > MODERN_ACTIVITY ) || ( n === NaN )) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let res = Math.log(MODERN_ACTIVITY / n) / k;  
  return Math.ceil(res);
};
