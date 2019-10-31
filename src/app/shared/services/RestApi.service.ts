import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';

import { PayloadResponse } from '../model/PayloadResponse.interface';

@Injectable()
export class RestApiService {

    private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    private services = {
        allSynonyms: 'synonyms/words',
        word: 'synonyms/word',
        search: 'synonyms/search'
    };

    constructor(private http: HttpClient) { }

    get<T>(url: string, data?: any): Observable<PayloadResponse<T>> {
        return this.http.get<T>(this.query(this.getServicePath(url), data), this.httpOptions)
            .pipe(
                retry(2), // retry a failed request up to 2 times
                catchError(this.handleError) // then handle the error
            );
    }

    post<T>(url: string, data: T): Observable<PayloadResponse<T>> {
        return this.http.post<T>(this.getServicePath(url), data, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(url: string, data: any): Observable<any> {
        return this.http.delete(this.query(this.getServicePath(url), data), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    put<T>(url: string, data: T): Observable<PayloadResponse<T>> {
        return this.http.put<T>(this.getServicePath(url), data, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Observable.throw(
            'Something bad happened; please try again later.');
    };

    private getServicePath(service: string) {
        if (this.services[service]) {
            return environment.apiUrl.concat(this.services[service]);
        }
        console.error('Rest Service '.concat(service).concat(' is undefined'));
    }

    public query(path: string, query?: any) {
        return Array.isArray(query) ? path + '/' + query.join('/') : path;
    }


}
