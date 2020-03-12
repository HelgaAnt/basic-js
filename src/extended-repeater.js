module.exports = function repeater(str, options ) {
    let pstr = String(str);
    let newstr = '';
    let i = 0; j = 0;
    let separator = (options.separator === undefined? '+' : options.separator);
    let addition = (options.addition === undefined? '' : options.addition);
    let additionSeparator = (options.additionSeparator === undefined? '|' : options.additionSeparator);
    let repeatTimes = (options.repeatTimes == undefined? 1 : options.repeatTimes);
    let additionRepeatTimes = (options.additionRepeatTimes == undefined? 1 : options.additionRepeatTimes);
        for (i=1; i <= repeatTimes; i++){
            newstr = newstr + pstr;
           
    
                for (j=1; j <= additionRepeatTimes; j++){
                    newstr = newstr +  addition;
                    if ( j < additionRepeatTimes)
                        newstr = newstr +  additionSeparator;
                }
                
    
            if ( i < repeatTimes)
                newstr = newstr +  separator;
        }
            
     

return  newstr;
};
  


