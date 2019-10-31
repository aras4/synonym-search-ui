import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WordResponse } from 'app/shared/model/WordResponse.class';
import { SynonymService } from './synonym.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    moduleId: module.id,
    templateUrl: 'synonym.component.html',
    styleUrls: ['synonym.component.scss'],
    providers: [SynonymService]
})
export class SynonymContainerComponent implements OnInit {

    words: WordResponse[] = [];
    searchWord: string;
    results: string[] = [];

    constructor(private synonymService: SynonymService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.getAll();
    }

    searchForWord() {
        if (!this.searchWord) { return this.results = []; }
        this.synonymService.search(this.searchWord).subscribe(response => this.results = response.payload);
    }

    saveNewWord(newWord: WordResponse) {
        this.synonymService.addWord(newWord).subscribe(_ => {
            this.getAll();
            this.toastr.success('New Word successfully added');
        })
    }

    getAll() {
        this.synonymService.getAll().subscribe(response => this.words = response.payload);
    }

    deleteAll() {
        this.synonymService.removeAll().subscribe(response => {
            this.words = [];
            this.toastr.success(response.payload);
        });
    }

}