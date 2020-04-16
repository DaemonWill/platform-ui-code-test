import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() listName : string = "";
  @Input() providerList : any[] = [];
  //when called, pass the given provider index to the list component for updating
  @Output() emitProviderIndex : EventEmitter<number> = new EventEmitter<number>();

  //on click, capture the given provider's index and pass it through the eventEmitter
  handleCardInteraction(index : number) : void {
    this.emitProviderIndex.emit(index);
  }
}
