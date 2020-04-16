import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private storageService : StorageService) {}

  ngOnInit() {
    //fetch data from session storage if applicable
    this.selectedProviders = this.storageService.getSelectedProviders();
    this.unselectedProviders = this.storageService.getUnselectedProviders();
  }

  selectedProviders : any[] = [];
  unselectedProviders : any[] = [];

  //given the index of an unselected provider, add it to selected and remove it from unselected
  selectProvider(index : number) : void {
    this.selectedProviders.push(this.unselectedProviders[index]);
    this.unselectedProviders.splice(index, 1);
    this.updateStorage();
  }

  //given the index of a selected provider, add it to unselected and remove it from selected
  unselectProvider(index : number) : void {
    this.unselectedProviders.push(this.selectedProviders[index]);
    this.selectedProviders.splice(index, 1);
    this.updateStorage();
  }

  //update session storage with the current choices made by the user
  updateStorage() : void {
    this.storageService.setSelectedProviders(this.selectedProviders);
    this.storageService.setUnselectedProviders(this.unselectedProviders);
  }
}
