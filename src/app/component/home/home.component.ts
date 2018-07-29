import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})

export class HomeComponent implements OnInit {
  public title: string;
  public cursosmoto=[
    {id:1,curso:'A1',descripcion:'Conducir motocicletas con un cilindraje igual o menor a 125 cc'},
    {id:2,curso:'A2',descripcion:'Conducir motocicletas con un cilindraje mayor a 125 cc'}
  ];
  public cursoscarroparticular=[
    {id:1,curso:'B1',descripcion:'Automoviles, motocarros, camperos, camionetas de servicio particular.'},
    {id:2,curso:'B2',descripcion:'Camiones, buses, busetas de servicio particular.'},
    {id:3,curso:'B3',descripcion:'Vehiculos articulados o tractocamiones.'}
  ];
  public cursoscarropublico=[
    {id:1,curso:'C1',descripcion:'Automoviles, motocarros, camperos, camionetas de servicio publico.'},
    {id:2,curso:'C2',descripcion:'Camiones, buses, busetas de servicio publico.'},
    {id:3,curso:'C3',descripcion:'Vehiculos articulados de servicio publico.'}
  ];
  public mostrarElementoA:string;
  public mostrarElementoB:string;
  public mostrarElementoC:string;

  public InduccionPractica:string;
  public TecnicasConduccion:string;
  public ExamenesMedicos:string;

  public A1categoria:string;
  public A1horaspracticas:string;
  public A1horasteoricas:string;

  public A2categoria:string;
  public A2horaspracticas:string;
  public A2horasteoricas:string;

  public B1categoria:string;
  public B1horaspracticas:string;
  public B1horasteoricas:string;
  
  public B2categoria:string;
  public B2horaspracticas:string;
  public B2horasteoricas:string;

  public B3categoria:string;
  public B3horaspracticas:string;
  public B3horasteoricas:string;

  public C1categoria:string;
  public C1horaspracticas:string;
  public C1horasteoricas:string;

  public C2categoria:string;
  public C2horaspracticas:string;
  public C2horasteoricas:string;

  public C3categoria:string;
  public C3horaspracticas:string;
  public C3horasteoricas:string;

  constructor() {
    this.mostrarElementoA='A1';
    this.mostrarElementoB='B1';
    this.mostrarElementoC='C1';
    
    this.InduccionPractica='Inducción a la práctica';
    this.TecnicasConduccion='Técnicas de conducción';
    this.ExamenesMedicos='Exámenes Médicos'

    this.A1categoria="A1";
    this.A1horaspracticas="20 horas practicas";
    this.A1horasteoricas="28 horas teoricas";

    this.A2categoria="A2";
    this.A2horaspracticas="21 horas practicas";
    this.A2horasteoricas="29 horas teoricas";

    this.B1categoria="B1";
    this.B1horaspracticas="20 horas practicas";
    this.B1horasteoricas="20 horas teoricas";

    this.B2categoria="B2";
    this.B2horaspracticas="25 horas practicas";
    this.B2horasteoricas="25 horas teoricas";

    this.B3categoria="B3";
    this.B3horaspracticas="30 horas practicas";
    this.B3horasteoricas="30 horas teoricas";

    this.C1categoria="C1";
    this.C1horaspracticas="35 horas practicas";
    this.C1horasteoricas="35 horas teoricas";

    this.C2categoria="C2";
    this.C2horaspracticas="40 horas practicas";
    this.C2horasteoricas="40 horas teoricas";

    this.C3categoria="C3";
    this.C3horaspracticas="49 horas practicas";
    this.C3horasteoricas="49 horas teoricas";
  }

  ngOnInit() {
    console.log('home.component cargado!!');
  }
  
  mostrar(item:any){
    if(item== 'A1' || item =='A2'){
      this.mostrarElementoA = item;
    }
    if(item== 'B1' || item =='B2' || item== 'B3'){
      this.mostrarElementoB = item;
    }
    if(item== 'C1' || item =='C2' || item=='C3'){
      this.mostrarElementoC = item;
    }
  }
}