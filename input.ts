function getInfo() {
  console.log("the getInfo fucntion called");
  const inputname = document.getElementById("name") as HTMLInputElement;

  const name: string = inputname.value;

  const inputemail = document.getElementById("email") as HTMLInputElement;
  const email: string = inputemail.value;
  const inputage = document.getElementById("age") as HTMLInputElement;

  const age: number = Number(inputage.value);
}
