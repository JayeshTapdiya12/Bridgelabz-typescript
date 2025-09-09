// namespace :provide a powerful way to organize code and prevent naming conflicts by creating a container for related functionality.

// means we are  grouping the the function and classs and all the things

namespace userNameSpace {
  export class Auth {
    login() {
      console.log("logged in");
    }
  }

  export function getList() {
    console.log("list of the user");
  }
}

var user99 = new userNameSpace.Auth();

user99.login();

namespace Admin {
  export class Auth {
    login() {
      console.log("logged in");
    }
  }

  export function getList() {
    console.log("list of the user");
  }
}
