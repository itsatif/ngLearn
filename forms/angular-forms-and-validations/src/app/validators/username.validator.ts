import { FormControl } from '@angular/forms';

export class UsernameValidator {

  static validUsername(user: FormControl){

    if(user.value.toLowerCase() === "abc123" || user.value.toLowerCase() === "123abc"){
      return {
        validUsername: true
      };
    } else {
      return null;
    }
  }
}
