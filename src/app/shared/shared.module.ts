import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { RestApiService } from './services/RestApi.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                RestApiService
            ]
        };
    }
}
