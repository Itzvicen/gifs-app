import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'], // Aquí había un error de tipeo, debe ser 'styleUrls' en lugar de 'styleUrl'
})
export class HomePageComponent {
  gifs: any[] = [];
  
  constructor(private GifsService: GifsService) {} // Inyecta el servicio aquí

  onSearch(searchValue: string) {
    this.GifsService.searchTag(searchValue).then(() => {
      this.gifs = this.GifsService.searchResults;
    });
  }
}