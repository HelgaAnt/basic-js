class VigenereCipheringMachine {
    constructor (n) {
        if ( n == false ) this.n = 1;  //revers
        else this.n = 0; //direct
    }

    encrypt(str, key) {
        let res= '';
        str = str.toLowerCase();
        key = key.toLowerCase();
        while (key.length < str.length){ key = key + key; }
        let j = 0;
        for (let i = 0; i < str.length; i++){
            if ((str[i]>='a' && str[i]<='z') || (str[i]>='a' && str[i]<='z')) {
            	let ch = str.charCodeAt(i) + key.charCodeAt(j) -194;
            	ch = ch > 25? ch-26: ch; 
               	res = res + String.fromCharCode(ch+65);
                j++;
            }
            else  res = res + str[i];
        }
        //console.log(this.n);
        if (this.n == 1) res =  res.split("").reverse().join("");
        //console.log(res);
        return res;
    }

    decrypt(str, key) {
        let res= '';
        str = str.toLowerCase();
        key = key.toLowerCase();
        while (key.length < str.length){ key = key + key; }
        let j = 0;
        for (let i = 0; i < str.length; i++){
            if ((str[i]>='a' && str[i]<='z') || (str[i]>='a' && str[i]<='z')) {
                let ch = key.charCodeAt(j) - str.charCodeAt(i);
            	ch = ch > 0? 26-ch: Math.abs(ch); 
            	res = res + String.fromCharCode(ch+65);
                j++;
            }
            else  res = res + str[i];
        }
        //console.log(this.n);
        if (this.n == 1) res =  res.split("").reverse().join("");
        //console.log(res);
        return res;
    }
}

module.exports = VigenereCipheringMachine;
