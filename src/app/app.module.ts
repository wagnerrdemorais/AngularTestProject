import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import {WarningAlertComponent} from "./warning-alert-component/warning-alert-component";
import { SuccessAlertComponentComponent } from './success-alert-component/success-alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HelloComponentComponent,
    WarningAlertComponent,
    SuccessAlertComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
