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
      'Authorization' : 'Bearer BQCOSeE_dv_UQFPdBEpypv8q26KG9wiqmKo57Msi2ELzU8nWNTC9199WZQTVG3N_bi0Z3E1d_I0F486c6mA'
    })

   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
   }

   buscarSpotify(palabra:string){
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQCOSeE_dv_UQFPdBEpypv8q26KG9wiqmKo57Msi2ELzU8nWNTC9199WZQTVG3N_bi0Z3E1d_I0F486c6mA'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${palabra}&type=artist`,{headers})

   }



}
