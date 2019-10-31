import { Injectable } from '@angular/core';
import { RestApiService } from 'app/shared/services/RestApi.service';
import { WordResponse } from 'app/shared/model/WordResponse.class';
import { Observable } from 'rxjs/Observable';
import { PayloadResponse } from 'app/shared/model/PayloadResponse.interface';

/**
* This class provides the SynonymService service with methods for manipulate with synonyms.
*/
@Injectable()
export class SynonymService {

    constructor(private api: RestApiService) { }

    addWord(newWord: WordResponse): Observable<PayloadResponse<WordResponse>> {
        return this.api.post<WordResponse>('word', newWord);
    }

    getAll(): Observable<PayloadResponse<WordResponse[]>> {
        return this.api.get<WordResponse[]>('allSynonyms');
    }

    search(word: string): Observable<PayloadResponse<string[]>> {
        return this.api.get<string[]>('search', [word]);
    }

}