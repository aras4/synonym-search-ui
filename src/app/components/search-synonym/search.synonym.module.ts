import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynonymContainerComponent } from './synonym.component';
import { SharedModule } from 'app/shared/shared.module';
import { AddFormComponent, ViewAllComponent } from '.';
import { ChipsModule } from 'primeng/chips';

const routes: Routes = [
    { path: '', component: SynonymContainerComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        ChipsModule
    ],
    declarations: [SynonymContainerComponent, AddFormComponent, ViewAllComponent],
})
export class SynonymSearchModule { } 