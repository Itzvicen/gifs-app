import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    templateUrl: 'search-box.component.html',
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    @Output() searchEvent = new EventEmitter<string>();

    constructor( private GifsService: GifsService ) {}
    
    public search(event: Event): void {
        event.preventDefault(); // Previene la recarga de la página

        const newTag = this.tagInput.nativeElement.value;

        if(newTag.trim().length === 0) {
            return;
        }

        this.searchEvent.emit(newTag);
        console.log(newTag); // Muestra por consola lo que se busca

        // Limpia el input después de la búsqueda
        this.tagInput.nativeElement.value = '';
    }
}