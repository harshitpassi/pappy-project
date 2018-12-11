// built-in
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ManageBlogsComponent } from './components/admin/manage-blogs/manage-blogs.component';
import { ManageFeedbacksComponent } from './components/admin/manage-feedbacks/manage-feedbacks.component';
import { ManageBookingsComponent } from './components/admin/manage-bookings/manage-bookings.component';
import { CreatePackageComponent } from './components/admin/create-package/create-package.component';
import { ManagePackageComponent } from './components/admin/manage-package/manage-package.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PackageComponent } from './components/package/package.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavBarComponent,
    AdminComponent,
    AdminHomeComponent,
    ManageBlogsComponent,
    ManageFeedbacksComponent,
    ManageBookingsComponent,
    CreatePackageComponent,
    ManagePackageComponent,
    HomepageComponent,
    AboutusComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
