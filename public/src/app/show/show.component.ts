import { Component, OnInit } from '@angular/core';
import{ NoteService } from './../note.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  notes;

  constructor(private _noteService: NoteService) { 

  }

  ngOnInit() {
    this._noteService.getNotes((data)=>{
      console.log(data);
      this.notes = data;
    })
  }

  ngOnChanges() {
    this._noteService.getNotes((data)=>{
      console.log(data);
      this.notes = data;
    })
  }

}
