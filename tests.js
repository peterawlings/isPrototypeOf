
// ==========================
// TESTS
// ==========================

// It should compare properties on each object passed in
// It should throw a typeError of prototypeObj is undefined
// It should return false if the second parameter is not a prototype of the first

tests({
  'It should return true if the second parameter is a prototype of the first': function() {
    eq(myPrototypeOf(myDog, dog), true);
	},
  'It should return false if the second parameter is not a prototype of the first': function() {
    eq(myPrototypeOf(empty, dog), false);
	},
  'It should throw an error if the second parameter is not defined': function() {
    try {
      isPrototypeOf(empty, undefined);
    } catch (e) {
      eq(e instanceof TypeError, true);
    }
	}
});
