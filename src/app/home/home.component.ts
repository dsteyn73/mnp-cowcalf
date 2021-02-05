import { Component, OnInit } from '@angular/core';
import { CowsService } from '../cows.service';
import { CowsList } from '../cowslist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;

  cows: CowsList[];
  selectedCowTag: string;
  selectedBreed: string;
  filteredCowTagList: any[];
  filteredBreedList: any[];
  noCowsFound: boolean = false;

  CowTag: string;
  bred: string;
  breed: string;
  



  /*flights: Flight[];
  selectedOrigin: string;
  selectedDestination: string;
  filteredOriginList: any[];
  filteredDestinationList: any[];
  noFlightsFound: boolean = false;
*/

  constructor(private cowsService: CowsService) { }

  getCowList(): void{
    alert('this is getCowList');
    //this.cowsService.getCowList();


  }
  /*
  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data =>{
      this.filteredOriginList = data;
      this.loading = false;
    }); 

    this.flightsService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
      this.loading = false;
    });
    */

  ngOnInit() : void {
    this.cowsService.getCowList(); 
  }
}