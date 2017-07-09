export class NoteModel {

    isi_note : String;
    judul_note : String;
    tanggal_note : String;

    constructor(judul_note: String, isi_note : String, tanggal_note : String){
        this.isi_note = isi_note;
        this.tanggal_note = tanggal_note;
        this.judul_note = judul_note;
    }

}
