import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <p>Prueba para el componente de Css, este parrafo responde ao estilo general de la aplicacion, 
  el del css, tera un estilo personalizado para el.</p>
  <app-css-classes></app-css-classes>
  <p [appResaltado]="'orange'" >Teste de directivas</p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy {
  ngAfterViewChecked(): void {
    console.log('Constructor Checed');
  }
  ngAfterViewInit(): void {
    console.log('Constructor ViewInit');
  }
  ngOnDestroy(): void {
    console.log('Constructor OnDestroy');
  }
  ngAfterContentChecked() {
    console.log('Constructor ContentChecked');
  }
  ngAfterContentInit() {
    console.log('Constructor AfterContent');
  }

  ngDoCheck() {
    console.log('Constructor DoCheck');
  }
  constructor() {
    console.log('Constructor Home');
  }

  ngOnChanges() {
    console.log('onChange');
  }



  ngOnInit() {
    console.log('Constructor OnInit');
  }


}
