// What will this print and why?

var a = 10;
if (true) {
  var a = 20;
  console.log(a);
}
console.log(a);

/**
    var is function-scoped, not block-scoped.  
    So the var a = 20; overwrites the var a = 10; even though it's inside the if block.
    Both console.log(a) print 20.
 */
