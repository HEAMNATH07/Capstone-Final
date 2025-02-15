import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) {}
  parking(){
    this.router.navigate(['/select-vehicle']);
  }
  room(){
    this.router.navigate(['/workspace']);
  }
  event()
  {
    this.router.navigate(['/event-request']);
  }
  employeeName: string = 'GHANSHYAM';

  onHover(section: string): void {
    console.log(`Hovering over: ${section}`);

}
}