import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  regresara(): void {
    this.router.navigate(['/home']);
  }

}
