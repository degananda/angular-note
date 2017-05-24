import { RouterModule, Routes } from '@angular/router'

// import component yang digunakan untuk routing
import { FormNoteComponent } from './form-note/form-note.component';
import { ComListnoteComponent } from './com-listnote/com-listnote.component';

// buat konstanta bertipe routes yang menyimpan detail routing
const  routingDetails : Routes = [
    {
        path : '',
        component : ComListnoteComponent,
        data : {
            breadcumb : 'home / listnote'
        }
    }, 
    {
        path : 'note/modify/:id',
        component : FormNoteComponent,
        data : {
            breadcumb : 'home / note / modify'
        }
    }
]

// export router
export const myRouter = RouterModule.forRoot(routingDetails);