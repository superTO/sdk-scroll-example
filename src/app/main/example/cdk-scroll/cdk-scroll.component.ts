import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cdk-scroll',
  templateUrl: './cdk-scroll.component.html',
  styleUrls: ['./cdk-scroll.component.scss']
})
export class CdkScrollComponent implements OnInit, OnDestroy {

  public list = Array.from(Array(100).keys());
  public form = new FormGroup({
    select: new FormControl(null, Validators.required),
    optionFilter: new FormControl()
  })

  private _unsubscribeAll = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.Subscribe();

    // due to option list no load
    this.form.get('select')?.setValue(99);
    // set option list
    this.form.get('optionFilter')?.setValue('99');
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private Subscribe(): void{
    const list = this.list.slice();
    this.form.get('optionFilter')?.valueChanges
      .pipe(tap(x => console.log(x)))
      .pipe(debounceTime(500))
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((input: string) => this.list = list.filter((x: number) => x.toString().toLowerCase().includes(input?.toLowerCase())))
  }

}
