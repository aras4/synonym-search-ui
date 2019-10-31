import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WordResponse } from 'app/shared/model/WordResponse.class';

@Component({
    moduleId: module.id,
    selector: 'view-all-words',
    templateUrl: 'view-all.component.html',
    styleUrls: ['view-all.component.scss']
})
export class ViewAllComponent {

    @Input() words: WordResponse[] = [];
    @Output() onDelete = new EventEmitter();

    constructor() { }

    deleteAll() {
        this.onDelete.emit();
    }

}