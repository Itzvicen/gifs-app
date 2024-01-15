import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent, // Declara SidebarComponent aquí
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent, // Exporta SidebarComponent aquí
  ]
})
export class SharedModule { }