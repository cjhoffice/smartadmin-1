import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../shared/layout/layout.service'
import { UserService } from '../shared/user/user.service'
import { VoiceControlService } from '../shared/voice-control/voice-control.service'
import {SoundService} from "../shared/sound/sound.service";



import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import {VoiceRecognitionService} from "../shared/voice-control/voice-recognition.service";
import {TabsModule, ProgressbarModule, TooltipModule, DropdownModule, AlertModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,


    TooltipModule.forRoot(),
    DropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
    UserService,
    VoiceControlService,
    VoiceRecognitionService,
    SoundService,



  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
