module.exports = function transform(arr) {

    if (arr instanceof Array) {

        let newarr = [];
        let j = 0;
        for (let i=0; i<arr.length; i++){
            switch (arr[i]) {
                case "--discard-next":
                    if (i <= arr.length-1) {
                        i++;
                    }
                    else {
                        //newarr[j] = arr[i];
                        //j++;  
                    }
                    break;
                case "--discard-prev":
                    if (i != 0) {
                        newarr.splice(-1, 1);
                        j = newarr.length;  
                    }
                    break;
                case "--double-next":
                    if (i < arr.length-1) {
                        newarr[j] = arr[i+1];
                        //newarr[j+1] = arr[i+1];
                        j++;
                    }
                    break;
                case "--double-prev":
                    if (i != 0) {
                        newarr[j] = arr[i-1];
                       // newarr[j+1] = arr[i-1];
                        j++;
                    }
                    else {
                       // newarr[j] = arr[i];
                       // j++;  
                    }
                    break;
                default:
                    newarr[j] = arr[i];
                    j++;
            };        
        };
        return newarr;
    }
    else   throw new Error('Not implemented');
   
};
