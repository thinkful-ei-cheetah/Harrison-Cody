function createMyObject() {
    return {
    foo:bar,
    answerToUniver:42,
    'olly olly':'oxen free',
    sayHello : function(){
      return 'hello'
     }
    }
  }
function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
  }

  function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
    return person;

  }
function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }