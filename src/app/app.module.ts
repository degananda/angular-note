import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// component
import { AppComponent } from './app.component';
import { ComNoteComponent } from './com-note/com-note.component';
import { PipeSensorPipe } from './pipe-sensor.pipe';
import { FormNoteComponent } from './form-note/form-note.component';
import { ComListnoteComponent } from './com-listnote/com-listnote.component';

// routing
import { myRouter } from './app.router';

// services
import { ServiceNoteService } from './service-note.service';
import { ComAddnoteComponent } from './com-addnote/com-addnote.component';

// dari newbie untuk newbie
@NgModule({
  declarations: [
    AppComponent,
    ComNoteComponent,
    PipeSensorPipe,
    FormNoteComponent,
    ComListnoteComponent,
    ComAddnoteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    myRouter
  ],
  providers: [
    ServiceNoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
