import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modalsnippet',
  templateUrl: './modalsnippet.component.html',
  styleUrls: ['./modalsnippet.component.css']
})
export class ModalsnippetComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
