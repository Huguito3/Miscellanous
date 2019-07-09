import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-classes',
  templateUrl: './css-classes.component.html',
  styles: []
})
export class CssClassesComponent implements OnInit {
  alerta = 'alert-danger';
  loading = false;
  propiedades = {
    danger: false
  };
  constructor() { }

  ngOnInit() {
  }
  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
