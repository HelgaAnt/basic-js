const chainMaker = {
  aChain: [],

  getLength() {
    return this.aChain.length;
  },

  addLink(value) {
    if (value === undefined) value = '';
    this.aChain.push( '( ' + value + ' )' );
    return this;
  },

  removeLink(position) {
    if (typeof position === "number" && position > 0 && position <= this.aChain.length) {
      this.aChain.splice(position - 1, 1);
    }
    else {
      this.aChain = [];
      throw new Error();
    }  
     return this;
  },

  reverseChain() {
    this.aChain.reverse();
    return this;
  },

  finishChain() {
    var res = this.aChain;
    this.aChain = [];
    return res.join("~~");
  }
};

module.exports = chainMaker;
