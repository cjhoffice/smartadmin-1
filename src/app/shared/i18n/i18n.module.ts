import {NgModule} from "@angular/core";

import {LanguageSelectorComponent} from "./language-selector/language-selector.component";
import {I18nPipe} from "./i18n.pipe";
import {I18nService} from "./i18n.service";
import {CommonModule} from "@angular/common";
import {DropdownModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
  ],
  declarations:[
    LanguageSelectorComponent,
    I18nPipe
  ],
  exports: [LanguageSelectorComponent, I18nPipe],
  providers: [I18nService]

})
export class I18nModule{}
