import { Injectable, OnInit } from "@angular/core";
import { CowsList } from "./cowslist.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DBCows } from "./dbcows.interface";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class CowsService {
  db: boolean;

  //Quickdata
  Cow0: DBCows = {
    id: 1,
    breed: "Shorthorn",
    pasture: "South",
    cowtag: "P1",
    dob: "03/15/16",
    bred: false
  };
  Cow1: DBCows = {
    id: 2,
    breed: "Angus",
    pasture: "South",
    cowtag: "P2",
    dob: "3/10/20",
    bred: true
  };
  Cow2: DBCows = {
    id: 3,
    breed: "Gelbviegh",
    pasture: "South",
    cowtag: "P3",
    dob: "3/28/19",
    bred: true
  };
  Cow3: DBCows = {
    id: 4,
    breed: "Brockle",
    pasture: "joe",
    cowtag: "12",
    dob: "3/15/17",
    bred: true
  };

  cows: DBCows[] = [this.Cow0, this.Cow1, this.Cow2, this.Cow3];

  backEndURL: string;

  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }

  getCowList(): Observable<any> {
    //console.log(this.http.get(`${this.backEndURL}/home`));

    //return this.http.get(`${this.backEndURL}/home`);
    return this.http.get(
      "http://127.0.0.1:51710/?key=cbb6bb78-1920-42dc-bb7b-baa798425bbb"
    );
  }
  /*getCowList() {
    return this.cows;
  }*/

  getAllCows(cowtag: number, breed: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/cows/query/${cowtag}/${breed}`);
  }

  /*getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${orig}/${dest}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }

  /*postFlight(flight: Flight) {
    return this.http.post(`${this.backEndURL}/flights`,flight);
  }

  updateFlight(flight: Flight) {
    return this.http.post(`${this.backEndURL}/flights/${flight.id}/update`,flight);
  }*/
  /*

  deleteFlight(id: number) {
    return this.http.post(`${this.backEndURL}/flights/${id}/delete`, null);
  }*/

  getBackEndUrl(): string {
    const segements = document.URL.split("/");
    const reggie = new RegExp(/localhost/);
    const DBConn =
      "http://127.0.0.1:51710/?key=cbb6bb78-1920-42dc-bb7b-baa798425bbb";

    ///console.log(DBConn);

    return DBConn;
    //return reggie.test(segements[2])
    //? "http://localhost:3002"
    //: "https://nestjs-typeorm-postgres.herokuapp.com";

    //http://127.0.0.1:51710/?key=cbb6bb78-1920-42dc-bb7b-baa798425bbb
  }
}
