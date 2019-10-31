import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WordResponse } from 'app/shared/model/WordResponse.class';

@Component({
    moduleId: module.id,
    selector: 'add-word-form',
    templateUrl: 'add-form.component.html',
})
export class AddFormComponent implements OnInit {

    newWord: WordResponse;
    @Output() onSave = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.newWord = new WordResponse();
    }

    saveNewWord() {
        this.onSave.emit(this.newWord);
        this.clearForm();
    }

    clearForm() {
        this.newWord = new WordResponse();
    }


}