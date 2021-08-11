import { NgModule } from '@angular/core';
import { CdkScrollComponent } from './cdk-scroll/cdk-scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { FeatureMaterialModule } from 'src/app/share/feature-material.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'cdkScroll', pathMatch: 'full'
  },
  {
    path: 'cdkScroll',
    component: CdkScrollComponent
  }
];

@NgModule({
  declarations: [
    CdkScrollComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
    FeatureMaterialModule
  ]
})
export class ExampleModule { }
