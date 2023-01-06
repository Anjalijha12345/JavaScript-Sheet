let string="you cannot end a sentence with because because is a conjuction";
let pattern=/because/gi;
let becauseCount=string.match(pattern).length;
console.log(becauseCount);