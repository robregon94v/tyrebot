import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NavigationService } from 'src/app/services/navigation.service';
import { ActiveVehiclesService } from '../active-vehicles.service';

@Component({
  selector: 'app-active-vehicles-container',
  templateUrl: './active-vehicles-container.component.html',
  styleUrls: ['./active-vehicles-container.component.scss']
})
export class ActiveVehiclesContainerComponent implements OnInit {
  vehicles$ = this.activeVehicleService.vehicles$;
  showBackBtn = false;
  form = this.fb.group({
    plate: [''],
    from: [''],
    to: ['']
  })

  constructor(
    private navigationService: NavigationService,
    private activeVehicleService: ActiveVehiclesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.navigationService.currentUrl$.subscribe((url) => {
      this.showBackBtn = url.includes('detail')
    })

    this.form.get('plate')?.valueChanges.subscribe((value) => {
      this.activeVehicleService.setPlate(value)
    })
  }

  dateChange() {
    const from = this.form.get('from')?.value
    const to = this.form.get('to')?.value
    if (from && to) {
      const data = {
        from: moment(this.form.get('from')?.value).format(),
        to: moment(this.form.get('to')?.value)
        .set('h', 23)
        .set('minutes', 59)
        .set('seconds', 59)
        .format()
      }
      this.activeVehicleService.setDate(data)
    }
  }

}