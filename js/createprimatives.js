//alert();

define(['lodash'], function(_) {
 
var a = [1,2,3,4,5];
var b = _.join(a,',');
//document.write(b);
//document.write(_.join(_.reverse(a),','));

document.write(add(3,4));

function add(a,b) {
   return a + b;
}

});

