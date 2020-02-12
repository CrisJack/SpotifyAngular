import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {  
    // this.http.get('https://api.spotify.com/v1/browse/new-releases').subscribe(data=>{
    //   console.log(data);
    // })

   }

   Fspotify(){
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAb9JTcxQw42HaDjKqey2K8_wRx34bo0DKdi4w9rKLWoyxAM7xQ8PziNfhi24uqFOORVGRDJB0zQmOdU0E'
    })

   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
   }

   buscarSpotify(palabra:string){
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAb9JTcxQw42HaDjKqey2K8_wRx34bo0DKdi4w9rKLWoyxAM7xQ8PziNfhi24uqFOORVGRDJB0zQmOdU0E'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${palabra}&type=artist`,{headers})

   }



}
