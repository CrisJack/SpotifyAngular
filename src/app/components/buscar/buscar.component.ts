import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:any [] = [];

  constructor(private _servicio:SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista(palabra:string){
    this._servicio.buscarSpotify(palabra).subscribe((data:any) => {
      console.log(data.artists.items);

      this.buscar = data.artists.items;
    });
  }

}
