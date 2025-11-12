import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HashingService {
  
  public hashPassword(password:string):string{
    return password;
  }

  public passwordsMatch(enteredPassword:string, storedPassword:string):boolean{
    return true;
  }
}
