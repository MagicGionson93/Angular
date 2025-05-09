import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertPersona(url: string, body: {}) {
    return this.http.post(url, body)
  }

  getPersone(url: string) {
    return this.http.get(url)
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`)
  }

  getPersonaById(id: string) {
    return this.http.get(
      `https://corso-angular-2ad46-default-rtdb.europe-west1.firebasedatabase.app/persone/${id}.json`
    );
  }

  patchPersona(url: string, id: string, body: {}){
    return this.http.patch(`${url}/${id}.json`, body)
  }
}
