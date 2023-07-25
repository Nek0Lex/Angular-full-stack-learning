import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  searchResult: FlightModel[] = [
    {
      airline: "Airline X",
      arrival: { place: "City A", time: Date.now().toString() },
      departure: { place: "City B", time: "2023-07-25 10:30 AM" },
      price: "$200",
      remainNumberOfSeats: 150,
    },
    {
      airline: "Airline Y",
      arrival: { place: "City C", time: Date.now().toString() },
      departure: { place: "City A", time: "2023-07-26 08:00 AM" },
      price: "$180",
      remainNumberOfSeats: 80,
    },
    {
      airline: "Airline Z",
      arrival: { place: "City D", time: Date.now().toString() },
      departure: { place: "City C", time: "2023-07-27 03:00 PM" },
      price: "$300",
      remainNumberOfSeats: 120,
    },
    {
      airline: "Airline W",
      arrival: { place: "City E", time: Date.now().toString() },
      departure: { place: "City D", time: "2023-07-28 09:30 AM" },
      price: "$250",
      remainNumberOfSeats: 50,
    },
    {
      airline: "Airline Q",
      arrival: { place: "City B", time: Date.now().toString() },
      departure: { place: "City E", time: "2023-07-29 06:45 AM" },
      price: "$350",
      remainNumberOfSeats: 90,
    },
  ];

}

export interface FlightModel {
  airline: string;
  arrival: TimePlaceModel;
  departure: TimePlaceModel;
  price: string;
  remainNumberOfSeats: number;
}

export interface TimePlaceModel {
  place: string;
  time: string;
}


