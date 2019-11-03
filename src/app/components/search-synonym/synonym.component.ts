import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { WordResponse } from 'app/shared/model/WordResponse.class';
import { SynonymService } from './synonym.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
    moduleId: module.id,
    templateUrl: 'synonym.component.html',
    styleUrls: ['synonym.component.scss'],
    providers: [SynonymService]
})
export class SynonymContainerComponent implements OnInit, OnDestroy {

    destroy$: Subject<boolean> = new Subject<boolean>();
    words: WordResponse[] = [];
    searchWord: string;
    results: string[] = [];

    constructor(private synonymService: SynonymService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.getAll();
    }

    searchForWord() {
        if (!this.searchWord) { return this.results = []; }
        this.synonymService.search(this.searchWord)
            .takeUntil(this.destroy$)
            .subscribe(response => this.results = response.payload);
    }

    saveNewWord(newWord: WordResponse) {
        this.synonymService.addWord(newWord)
            .takeUntil(this.destroy$)
            .subscribe(_ => {
                this.getAll();
                this.toastr.success('New Word successfully added');
            })
    }

    getAll() {
        this.synonymService.getAll()
            .takeUntil(this.destroy$)
            .subscribe(response => this.words = response.payload);
    }

    deleteAll() {
        this.synonymService.removeAll()
            .takeUntil(this.destroy$)
            .subscribe(response => {
                this.words = [];
                this.toastr.success(response.payload);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

}