import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';

function countdownConfigFactory(): CountdownConfig {
  return { format: `dd-mm HH:MM:ss` };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule
  ],
  providers: [
    { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
