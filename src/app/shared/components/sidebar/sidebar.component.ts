import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
  constructor(public gifsService: GifsService) { }
}
