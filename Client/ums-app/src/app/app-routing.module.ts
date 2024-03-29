import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { getData, sendRouteNames } from '@eyepax/utility';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  // { path: '**', component: EmptyRouteComponent },
  { path: '', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'faq-app', component: EmptyRouteComponent, title: 'Quepax' },
  {
    path: sendRouteNames().changePw,
    component: ChangePasswordComponent,
    title: 'Change Password',
  },
  {
    path: sendRouteNames().editProfile,
    component: EditProfileComponent,
    title: 'Edit-Profile',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RegisterComponent,
    LoginComponent,
    EditProfileComponent,
    ChangePasswordComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [
    RouterModule,
    RegisterComponent,
    LoginComponent,
    EditProfileComponent,
    ChangePasswordComponent,
  ],
})
export class AppRoutingModule {}
