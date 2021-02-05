import { Injectable, OnInit } from "@angular/core";
import { CowsList } from "./cowslist.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CowsService {
  db: boolean;

  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getCows(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${orig}/${dest}`);
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
    return reggie.test(segements[2])
      ? "http://localhost:3002"
      : "https://nestjs-typeorm-postgres.herokuapp.com";
  }
}
