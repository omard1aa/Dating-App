import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery'
import { NgProgressModule } from 'ngx-progressbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'      
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgProgressModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
    NgProgressModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
