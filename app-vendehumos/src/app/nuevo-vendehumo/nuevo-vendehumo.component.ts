import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardar() {
    // post.subscribe(() => {
    this.router.navigate(['/']);
    // })

  }

}
