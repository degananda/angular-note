import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// component
import { AppComponent } from './app.component';
import { ComNoteComponent } from './com-note/com-note.component';
import { PipeSensorPipe } from './pipe-sensor.pipe';
import { FormNoteComponent } from './form-note/form-note.component';
import { ComListnoteComponent } from './com-listnote/com-listnote.component';

// material & animations
import { 
  MdButtonModule, 
  MdInputModule,
  MdListModule,
  MdToolbarModule,
  MdIconModule,
  MdSnackBarModule,
  MdTooltipModule,
  MdMenuModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdOptionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { myRouter } from './app.router';

// services
import { ServiceNoteService } from './service-note.service';
import { ComAddnoteComponent } from './com-addnote/com-addnote.component';
import { PipeSearchPipe } from './pipe-search.pipe';
import { ComSearchComponent } from './com-search/com-search.component';
import { ComLoadingComponent } from './com-loading/com-loading.component';
import { PipeSortPipe } from './pipe-sort.pipe';

// dari newbie untuk newbie
@NgModule({
  declarations: [
    AppComponent,
    ComNoteComponent,
    PipeSensorPipe,
    FormNoteComponent,
    ComListnoteComponent,
    ComAddnoteComponent,
    PipeSearchPipe,
    ComSearchComponent,
    ComLoadingComponent,
    PipeSortPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    myRouter,
    BrowserAnimationsModule,
    // material component
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdMenuModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdOptionModule
    // end of material component
  ],
  providers: [
    ServiceNoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
