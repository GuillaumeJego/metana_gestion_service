import { Component, OnInit, inject } from '@angular/core';
import { PrestationsService } from '../../../core/services/prestations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss'
})
export class PrestationsComponent implements OnInit{
  private prestationsService = inject(PrestationsService);
  readonly prestations = this.prestationsService.getPrestation();


  ngOnInit(): void {
    console.log("ngOnInit Prestation");
  }
}
