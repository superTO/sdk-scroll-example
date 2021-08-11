import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-scroll',
  templateUrl: './cdk-scroll.component.html',
  styleUrls: ['./cdk-scroll.component.scss']
})
export class CdkScrollComponent implements OnInit {

  public list = Array.from(Array(100).keys());
  constructor() { }

  ngOnInit(): void {
  }

}
