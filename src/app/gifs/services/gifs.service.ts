import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory : string[] = [];
  private _searchResults = new BehaviorSubject<any[]>([]);
  readonly searchResults$ = this._searchResults.asObservable();

  private apiKey : string = 'NWYGnRq612NlxoUcorpY2cHh2Der1jw9'

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    this._tagsHistory = JSON.parse(localStorage?.getItem('tagsHistory') || '[]');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get searchResults() {
    return [...this._searchResults.value];
  }

  async searchTag(tag: string):Promise<void> {
    tag = tag.trim().toLocaleLowerCase();
    
    if(tag.length > 0) {
      this._tagsHistory.unshift(tag);
      this._tagsHistory = this._tagsHistory.splice(0,10);
      localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));

      const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=12`;

      const response = await fetch(url);
      const {data} = await response.json();

      this._searchResults.next(data);
      console.log(this._searchResults.value)
    }
  }
}
