import { ProfileSettingComponent } from './Components/profile-setting/profile-setting.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ImageViewComponent } from './Components/image-view/image-view.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
  {path: "home", component: ImageViewComponent},
  {path: "setting", component: ProfileSettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
