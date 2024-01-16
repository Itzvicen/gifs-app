import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  gifs: any[] = [];

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {
    this.gifsService.searchResults$.subscribe(results => {
      this.gifs = results;
    });
  }

  onSearch(searchValue: string) {
    this.gifsService.searchTag(searchValue);
  }
}