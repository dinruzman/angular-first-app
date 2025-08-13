import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule]
})
export class WelcomePage implements OnInit {
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  public testAlert(){
    this.router.navigate(['/welcome2']);
  }
}
