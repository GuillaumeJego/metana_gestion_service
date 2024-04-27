import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/components/header/header.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { MainComponent } from './features/components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule, // Ajouter HttpClientModule ici
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'metana_gestion_finances';
}
