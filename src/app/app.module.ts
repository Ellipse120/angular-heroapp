import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HighlightDirective} from "./attribute-directives/highlight.directive";
import {HeroSearchComponent} from "./hero-search.component";
import { NgZoneDemo } from './ng-zone-demo';
import { ChatAppComponent } from './chat/chat-app.component';
import { ChatNavComponent } from './chat/components/chatNavComponent';
import { ChatThreadsComponent } from './chat/components/chatThreadsComponent';
import { ChatWindowComponent } from './chat/components/chatWindowComponent';
import { UserService } from './chat/services/userService';
import { MessageService } from './chat/services/messageService';
import { AdBannerComponent } from './ad-banner.component';
import { DynamicLoadComponent } from './dynamicLoad.component';
import { AdService } from './ad.service';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) // 模拟web api
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    NgZoneDemo,
    ChatAppComponent,
    ChatNavComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    AdBannerComponent,
    DynamicLoadComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective
  ],
  providers: [
    HeroService,
    UserService,
    MessageService,
    AdService
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
