import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackageService } from '../../../services/package.service';

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
export class CreatePackageComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  noOfDays; 
  // date:date;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    // this.date={
    //   date1:"",
    //   date2:"",
    //   date3:""

    // }
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

  generateDaysArray(){
    return Array(parseInt(this.noOfDays));
  }

   

}
