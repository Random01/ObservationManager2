import { NgModule } from '@angular/core';
import { TargetSearchComponent } from './target-search/target-search.component';

@NgModule({
    declarations:[
        TargetSearchComponent
    ],
    exports:[
        TargetSearchComponent
    ]
})

export class TargetModule { }