import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-dynamicLoadComponent',
  template: `
    <h2>Advertisements</h2>
    <app-ad-banner [ads]="ads"></app-ad-banner>
  `
})
export class DynamicLoadComponent implements OnInit{
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
