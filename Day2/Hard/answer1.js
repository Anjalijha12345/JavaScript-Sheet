let string='Love is the best thing in this world. Some found their love and some are still for their love.'
let pattern=/love/gi
let countlove=string.match(pattern).length;
console.log(countlove);
