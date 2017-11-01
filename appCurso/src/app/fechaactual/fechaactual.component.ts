import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  template: `
<p> {{sexo | i18nSelect: encabezamiento}}  {{nombre}}</p>
`,
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  nombre: string = 'Andrés';
  sexo: string = 'hombre';
  encabezamiento: any = {'hombre': 'Estimado', 'mujer': 'Estimada'};
}
