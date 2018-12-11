import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackageService } from '../../../services/package.service';

import { Package } from '../../../models/package.model';

// export interface date{
//   date1:string;
//   date2:string;
//   date3:string;
// }
@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit{
  showSucessMessage: boolean;
  serverErrorMessages: string;
  selectedPackage: Package = {
    packageID: '',
    packageName: '',
    source: '',
    price: 0,
    maxPersons: 0,
    dates: '',
    noOfDays: 0,
    itineraryDays: []
  };
  // date:date;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    // this.date={
    //   date1:"",
    //   date2:"",
    //   date3:""

    // }
  }

  initializeItinerary() {
    this.selectedPackage.itineraryDays.length = this.selectedPackage.noOfDays;
    this.selectedPackage.itineraryDays.fill({
      dayTitle: '',
      dayDescription: ''
    });
    console.log(this.selectedPackage.itineraryDays);
  }

  onSubmit(form: NgForm) {
    this.packageService.postPackage(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        // this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

}
