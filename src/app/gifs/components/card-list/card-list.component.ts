import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})

export class CardListComponent implements OnInit {
  gifs: any[] = [];
  isLoading: boolean = false;

  gifs$: Observable<any[]> | undefined;
  
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    this.isLoading = true; // Comienza la carga
    this.gifs$ = this.gifsService.searchResults$;
    this.gifs$.subscribe(() => {
      this.isLoading = false; // Termina la carga cuando los datos son recibidos
    });
  }
}