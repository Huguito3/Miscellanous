import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Este parte pertenece al componente CSS, va a tenr un estilo personalizado.
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 20px;
    }`
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
