import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  private ps = inject(PostService);
  readonly posts = this.ps.getPosts();

  ngOnInit(): void {    
    console.log("ngOnInit DashBoard");
  }

}
