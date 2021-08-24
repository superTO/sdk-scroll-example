import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureMaterialModule } from 'src/app/share/feature-material.module';
import { ShareModule } from 'src/app/share/share.module';

import { CdkScrollComponent } from './cdk-scroll.component';

describe('CdkScrollComponent', () => {
  let component: CdkScrollComponent;
  let fixture: ComponentFixture<CdkScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkScrollComponent ],
      imports: [
        BrowserAnimationsModule,
        ShareModule,
        FeatureMaterialModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
