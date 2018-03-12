class SmartCalculator {
  constructor(initialValue) {
    this.expr = String(initialValue);
  }

  add(number) {
    this.expr = this.expr + "+" + number;
    return this
  }

  subtract(number) {
    this.expr = this.expr + "-" + number;
    return this
  }

  multiply(number) {
    this.expr = this.expr + "*" + number;
    return this
  }

  devide(number) {
    this.expr = this.expr + "/" + number;
    return this
  }

  pow(number) {
    this.expr = this.expr + "**" + number;
    return this
  }
  
  valueOf() {
    return eval(this.expr);
  }

}

module.exports = SmartCalculator;
