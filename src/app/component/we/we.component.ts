import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.css']


})

export class weComponent implements OnInit {
  public title: string;
  public mision: string;
  public vision: string;
  public politicacalidad: string;
  public quiensomos: Array<string>;
  public valores: Array<string>;
  public SabiaUsted: Array<string>;


  constructor() {
    this.title = ''
    this.mision = 'EL CENTRO DE RECONOCIMIENTO DE CONDUCTORES CERTICOND S.A.S  es una IPS dedicada a la prestación de servicios de salud especializados en la generación de los certificados de aptitud física, MENTAL Y DE Coordinación Motriz para conductores, con un equipo humano y tecnológico altamente competente direccionado al cumplimiento de las exigencias requeridas por los entes gubernamentales que nos rigen.'
    this.vision = 'EL CENTRO DE RECONOCIMIENTO DE CONDUCTORES CERTICOND S.A.S  para el año 2018 será un organismo de certificación de personas líder a nivel nacional, reconocido por su eficiencia, ética, imparcialidad y confidencialidad en los resultados entregados, convirtiéndose en una muy buena opción para el mercado nacional en salud y contribuyendo al incremento y mejoramiento de la calidad de vida de nuestros usuarios y de la comunidad en general.'
    
    this.politicacalidad = 'Prestar un servicio apto de certificación a personas en alcances de evaluación en los certificados de actitud física y de coordinación motriz, estipulado para conductores con criterios de oportunidad, equidad, validez y confiabilidad,  teniendo claro la existencia de los requerimientos establecidos en la normatividad vigente, La organización garantiza la mejora continua por medio de la competencia de su personal y el manejo adecuado de su sistema de gestión de calidad, que se refleja en la satisfacción de los usuarios y en el cumplimiento demostrado de la reglamentación vigente, a través de la acreditación como organismo de certificación de personas.';
    this.quiensomos = ['La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P.  Es una entidad sin ánimo de lucro, cuyo objetivo único ha sido el de ofrecer el servicio de acueducto y alcantarillado a las comunidades de los sectores Cuatro Esquinas, Cimarronas, el águila, La lela, Barrio Obrero y la puerta como también se presta el servicio al Asilo de Ancianos Santa Ana, Escuela, Parroquia, Club la macarena del Municipio de Rionegro-Antioquia.',
      'Desde la fecha de iniciación del Acueducto en 1969, se contaba con 37 usuarios, número que fue creciendo, a la fecha tenemos 894 usuarios, en 1980 se colocaron medidores a todos los usuarios ya que solo se pagaba un cargo fijo.',
      'La Asociación de Acueducto Cuatro Esquinas se ha sostenido como microempresa de servicio comunitario gracias a la efectividad, organización directiva y administrativa la cual ha logrado brindar un servicio de agua de mejores condiciones fiscas, químicas y biológicas.',
      'La Asociación de Acueducto y Alcantarillado Cuatro Esquinas fue creada con personería jurídica 40434 de 1993 y como tal puede actuar como empresa de servicios públicos expandiéndose a las diferentes áreas de influencia.',
    ];
    this.SabiaUsted = [
      'La idea de construir un Acueducto para los sectores cuatro esquinas, cimarronas, Quebrada la Puerta y el rosal surgió en 1964.',
      'El primer presidente de la junta fue el Señor Adolfo Giraldo y tesorero el Señor Pedro Luis Gomez.',
      'El acueducto en sus inicios se vio en la necesidad de hacer reinados y festivales para la recolección de fondos.',
      'La primera caseta del Acueducto fue construida en Guadua y estaba ubicada en la vía Marinilla- El Carmen.',
      'La primera Merced del Agua fue otorgada por cornare en 1987 de 3.93 L/S y fue tomada de la Quebrada Tres Puertas. Actualmente es de 9.1 L/S. Entre las Fuentes Tres Puertas y la Puerta.',
      'Las primeras redes fueron construidas por los habitantes del Sector.',
      'El primer Medidor fue ubicado en el Sector La Lela.',
      'El Acueducto Cumple con la Normatividad Exigida por el Ministerio de la Protección Social (Decreto 1575 de 2007 y resolución 2115 de 2007, mediante la realización de Análisis fisicoquímicos y microbiológicos del agua entregada a los usuarios en la red de distribución.',
      'El Acueducto cuenta con un laboratorio dotado con los equipos básicos para realizar control de calidad del agua antes durante y después del tratamiento.',
      'El acueducto de cuatro esquinas es uno de los que posee mayor eficiencia y calidad, pues cuenta con un sistema especial de tratamiento que consta de coagulación, floculación, sedimentación, filtración y desinfección.'
    ];
  }

  ngOnInit() {
    console.log('we.component cargado!!');
  }

}