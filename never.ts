// never data type

// we can only assignthe never when there is no end point like infintite loop or anything

function loop(): never {
  while (true) {
    console.log("loop");
  }
}

function simple(): never {
  console.log("simple");
}

function error(): never {
  throw new Error("error");
}

// difference between void and never it that
// void does not return anything
// never is not in state to return the thing
