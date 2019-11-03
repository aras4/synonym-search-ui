import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { SynonymContainerComponent } from './synonym.component';
import { DebugElement } from '@angular/core';
import { ViewAllComponent, AddFormComponent } from '.';
import { SharedModule } from 'app/shared/shared.module';
import { ChipsModule } from 'primeng/primeng';
import { RestApiService } from 'app/shared/services/RestApi.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { WordResponse } from 'app/shared/model/WordResponse.class';


describe('SynonymContainerComponent', () => {
    let component: SynonymContainerComponent;
    let fixture: ComponentFixture<SynonymContainerComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, ChipsModule, HttpClientModule, ToastrModule.forRoot()],
            declarations: [
                SynonymContainerComponent, AddFormComponent, ViewAllComponent

            ],
            providers: [RestApiService, ToastrService]
        })
            .compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(SynonymContainerComponent);
        component = fixture.debugElement.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    }));

    it(`should create`, async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should call method getAll on Init component`, fakeAsync(() => {
        const spyGetAll = spyOn(component, 'getAll');
        component.getAll();
        expect(spyGetAll).toHaveBeenCalled();
        fixture.detectChanges();
    }));

    it(`should save new word when user click Save button`, fakeAsync(() => {
        const spySave = spyOn(component, 'saveNewWord');
        const req = new WordResponse();
        req.word = 'test';
        req.synonyms = ['a', 'b', 'c'];
        component.saveNewWord(req);
        expect(spySave).toHaveBeenCalled();
        fixture.detectChanges();
    }));

    it(`should retrieve all synonyms for requested word when user click Search button`, fakeAsync(() => {
        const spySearch = spyOn(component, 'searchForWord');
        component.searchWord = 'test';
        component.searchForWord();
        expect(spySearch).toHaveBeenCalled()
        fixture.detectChanges();
    }));

    it(`should delete all when user click X button`, fakeAsync(() => {
        const spyDeleteAll = spyOn(component, 'deleteAll');
        component.deleteAll();
        expect(spyDeleteAll).toHaveBeenCalled();
        fixture.detectChanges();
    }));

});
