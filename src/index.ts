import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatingActionMenuComponent} from './floating-action-menu/floating-action-menu.component';
import {FloatingActionButtonComponent} from './floating-action-menu/floating-action-button.component';
import { SvgSpriteComponent } from './floating-action-menu/svg-sprite.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FloatingActionMenuComponent,
      FloatingActionButtonComponent,
      SvgSpriteComponent
  ],
  exports: [
      FloatingActionMenuComponent,
      FloatingActionButtonComponent,
      SvgSpriteComponent
  ]
})
export class FloatingActionMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FloatingActionMenuModule,
      providers: []
    };
  }
}
