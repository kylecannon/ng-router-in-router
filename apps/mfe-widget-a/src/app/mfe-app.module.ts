import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
})
export class MfeAppModule {
  constructor() {
    console.log('widget a app module loaded');
  }
}
