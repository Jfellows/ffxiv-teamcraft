import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { CoreModule } from '../../core/core.module';
import { PipesModule } from '../../pipes/pipes.module';
import { XivapiClientModule, XivapiService } from '@xivapi/angular-client';
import { RouterModule, Routes } from '@angular/router';
import {
  NzAutocompleteModule,
  NzButtonModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzListModule,
  NzSelectModule,
  NzTabsModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserAvatarModule } from '../../modules/user-avatar/user-avatar.module';
import { FullpageMessageModule } from '../../modules/fullpage-message/fullpage-message.module';
import { IntegrityCheckPopupComponent } from './users/integrity-check-popup/integrity-check-popup.component';
import { INTEGRITY_CHECKS } from './users/integrity-checks/integrity-check';
import { AllCharactersValidCheck } from './users/integrity-checks/all-characters-valid-check';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

const userIntegrityChecks: Provider[] = [
  {
    provide: INTEGRITY_CHECKS,
    useClass: AllCharactersValidCheck,
    deps: [XivapiService],
    multi: true
  }
];

@NgModule({
  providers: [
    ...userIntegrityChecks
  ],
  declarations: [
    UsersComponent,
    IntegrityCheckPopupComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CoreModule,
    PipesModule,
    XivapiClientModule,

    RouterModule.forChild(routes),
    FlexLayoutModule,
    NzSelectModule,
    NzFormModule,
    NzAutocompleteModule,
    NzInputModule,
    NzListModule,
    NzIconModule,
    UserAvatarModule,
    FullpageMessageModule,
    NzButtonModule,
    NzToolTipModule,
    NzTabsModule
  ]
})
export class AdminModule {
}
