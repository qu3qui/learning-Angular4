import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  template: `
<p>La cotización actual del dolar es de {{dolareuro | euro}}</p>
`,
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  dolareuro: number = 0.88;
}
