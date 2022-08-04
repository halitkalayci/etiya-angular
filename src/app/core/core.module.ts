import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IfNotDirective],
  imports: [CommonModule, CoreRoutingModule, AuthModule],
  exports: [IfNotDirective]
})
export class CoreModule {}
