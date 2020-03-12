module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        let maxDepth = 1;
        let arrDepth = 1;
        for (let i = 0; i<arr.length; i++ ) {
            if (Array.isArray(arr[i])){
                arrDepth = arrDepth + this.calculateDepth(arr[i]);
                maxDepth = (maxDepth < arrDepth)? arrDepth: maxDepth;
                arrDepth = 1;
            }
        }
    return maxDepth;    
    }
};

