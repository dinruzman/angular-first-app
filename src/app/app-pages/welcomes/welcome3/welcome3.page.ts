import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome3',
  templateUrl: './welcome3.page.html',
  styleUrls: ['./welcome3.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class Welcome3Page implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  public goToWelcome2() {
    this.router.navigate(['/welcome2']);
  }

}
