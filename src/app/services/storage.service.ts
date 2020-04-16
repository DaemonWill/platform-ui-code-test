import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
* Singleton like service to be used to track activity/data throughout app lifecycle
*/
export class StorageService {
  constructor() {}

  //have a flag stored in session to indicate if any changes have been made
  private hasChange : string = "";
  private selectedProviders : any[] = [];
  private unselectedProviders : any[] = [
      {
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      },
      {
        id: '2',
        name: 'Mary',
        address: '443 Windwhisper Road',
        phone: '2233211903'
      },
      {
        id: '3',
        name: 'Jason',
        address: '9992 Pumpkin Hollow',
        phone: '4343219384'
      }
  ];

  /*
  * The Getters
  * first check if hasSelected has been flagged in the session,
  * return session data for the list if flagged, else: return instance value
  */
  public getChange() : string {
    return (sessionStorage.getItem("hasChange") || this.hasChange);
  }
  public getSelectedProviders() : any{
    if(this.getChange()){
      return JSON.parse(sessionStorage.getItem("selected"));
    }
    else{
      return this.selectedProviders;
    }
  }
  public getUnselectedProviders() : any{
    if(this.getChange()){
      return JSON.parse(sessionStorage.getItem("unselected"));
    }
    else{
      return this.unselectedProviders;
    }
  }

  /*
  * The Setters
  * set the instance's private fields with the data provided
  * then store that data into the sessionStorage for data persistance, and set hasChange to true
  */
  public setChange() : void {
    this.hasChange = "true";
    sessionStorage.setItem("hasChange", "true");
  }
  public setSelectedProviders(providers : any[]) : void{
    this.selectedProviders = providers;
    //allow cart obj to persist after page refresh
    sessionStorage.setItem("selected", JSON.stringify(providers));
    this.setChange();
  }
  public setUnselectedProviders(providers : any[]) : void{
    this.unselectedProviders = providers;
    //allow cart obj to persist after page refresh
    sessionStorage.setItem("unselected", JSON.stringify(providers));
    this.setChange();
  }
}
