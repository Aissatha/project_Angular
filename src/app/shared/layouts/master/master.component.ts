import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  standalone:true,
  imports:[RouterModule,CommonModule],
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
