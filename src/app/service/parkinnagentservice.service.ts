import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkinnagentserviceService {
  private apiUrl = `http://localhost:8555/tawasalna-facilities-management/parkinglot`;
  private apiUrl2 = `http://localhost:8555/tawasalna-facilities-management/parkingspace`;
  constructor(private http: HttpClient) { }

  addparkinglot(body: any) {
    return this.http.post(`${this.apiUrl}/addparkinglot`, body);
  }

  updateparkinglot(id:String,body: any) {
    return this.http.put(`${this.apiUrl}/updateparkinglot/${id}`, body);
  }

  getAllParkingLot() {
    return this.http.get<any[]>(`${this.apiUrl}/getparkinglots`);
  }
  deleteParkingLot(id: number) {
    return this.http.delete(`${this.apiUrl}/deleteparkinglot/${id}`);

  }



  ///parkingspace
  addparkingspace(body: any) {
    return this.http.post(`${this.apiUrl2}/addparkingSpace`, body);
  }
  getAllParkingSpace() {
    return this.http.get<any[]>(`${this.apiUrl2}/getparkingspace`);
  }

  getAllParkingSubSpace() {
    return this.http.get<any[]>(`${this.apiUrl2}/getparkingSubspace`);
  }




  // getParkingLotById(id: String) {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }


}
