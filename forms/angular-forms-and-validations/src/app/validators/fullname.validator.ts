import { FormControl } from '@angular/forms';

export class FullnameValidator {

  static validFullname(user: FormControl){

    if(user.value.toLowerCase() === "abc"){
      return {
        validUsername: true
      };
    } else {
      return null;
    }
  }
}
