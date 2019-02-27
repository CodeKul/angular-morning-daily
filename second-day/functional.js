// assigning functions to variables
var _this = this;
var fn = function (num) {
    console.log('hi');
    console.log(this);
};
// fn(10)
var fnLmd = function (nm) { return console.log(_this); };
fnLmd(10);
