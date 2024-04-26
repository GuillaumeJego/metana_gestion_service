import { Component, OnInit, inject } from '@angular/core';
import { PrestationService } from '../../../core/services/prestation.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../../core/services/post.service';

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
  private prestationService = inject(PrestationService);
  readonly prestations = this.prestationService.getPrestation();

  // constructor(
  //   private prestationService: PrestationService
  // ){}

  ngOnInit(): void {
    console.log("ngOnInit Prestation");
  }
  //   // this.prestationService.getPrestation().subscribe({
  //   //   next: (data) => {
  //   //     console.log('Data received:', data);
  //   //     this.prestations = data;
  //   //   },
  //   //   error: (error) => {
  //   //     console.error('Une erreur est survenue : ', error);
  //   //   },
  //   //   complete: () => console.log('Completed')
  //   // });
  // }

}
