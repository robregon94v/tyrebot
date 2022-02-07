import { Component } from '@angular/core';

@Component({
  selector: 'app-tpms-fuel',
  template: `<app-tyre-tabs [tabs]="tabs" [columns]="columns"></app-tyre-tabs>`
})
export class TpmsFuelComponent {
  tabs = ['TPMS Sin Señal', 'Alto consumo de combustible'];

  columns: {key: string, name: string}[] = [
    {
      key: 'plate',
      name: 'Patente'
    },
    {
      key: 'internal_number',
      name: 'Nº de Vehículo'
    },
    {
      key: 'axies',
      name: 'Ejes'
    },
    {
      key: 'hubName',
      name: 'Dispositivo GPS'
    },
    {
      key: 'chassis',
      name: 'Alertas'
    },
    {
      key: 'action',
      name: 'Acciones'
    }
  ];

  constructor() { }

}