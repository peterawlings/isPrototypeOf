var canine = {
  bark: function(){
    console.log('bark');
  },
  legs: 4
};

var dog = Object.create(canine);

dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);



function myPrototypeOf(newObject, originalObject) {

  if(typeof originalObject === 'undefined' || originalObject === 'null' ) {
    throw new TypeError ('prototype cannot be null or unefined');
  }

  var originalObjPropArray = [];
  for (var originalProp in originalObject) {
    originalObjPropArray.push(originalProp);
  }

  var newObjPropArray = [];
  for (var newProp in newObject) {
    newObjPropArray.push(newProp);
  }

  var itemCount = 0;
  newObjPropArray.forEach(function(item, i){
    if(originalObjPropArray.includes(item)) {
      itemCount++;
    }
  });

  if(itemCount === originalObjPropArray.length) {
    return true;
  } else {
    return false;
  }
}

console.log(myPrototypeOf(myDog, dog));
