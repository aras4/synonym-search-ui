import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:
    [
      RouterModule.forRoot([
        {
          path: 'home',
          loadChildren: './components/search-synonym/search.synonym.module#SynonymSearchModule'
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },

      ])
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

