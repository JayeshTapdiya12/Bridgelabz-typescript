// Decorators in typescript
// it is a special kind of feature / decalartion that can be attachde to classes ,methods, property to modify their  behavior.

// Decorators are a powerful TypeScript feature that allow you to add metadata and modify classes and their members at design time.

// Four main types:

// Class decorator: Marks or transforms an entire class.

// Method decorator: Wraps/enhances instance methods.

// Property decorator: Augments field behaviors.

// Parameter decorator: Attaches logic to argument positions.

function classLogger(constructor: Function) {
  console.log(constructor.name);
}

function keyDetails(target: any, key: any) {
  console.log(key);
}

@classLogger
class CustomMath {
  @keyDetails
  value1: number;
  value2: number;
  constructor(x: number, y: number) {
    this.value1 = x;
    this.value2 = y;
  }
}

var cm1 = new CustomMath(10, 20);

// override function  with the decorator in typescript

function updatedSum(target: any, key: string, descriptior: PropertyDescriptor) {
  descriptior.value = function sum(x: number, y: number) {
    var output = x + y;
    return "the value of the sum is :" + output;
  };
}

class CustomMath2 {
  @updatedSum
  sum(x: number, y: number) {
    return x + y;
  }
}

var cm2 = new CustomMath2();
console.log(cm2.sum(10, 20));
