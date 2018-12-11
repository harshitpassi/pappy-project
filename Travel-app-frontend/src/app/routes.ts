import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatePackageComponent } from './components/admin/create-package/create-package.component';
import { PackageComponent } from './components/package/package.component';
import { ManagePackageComponent } from './components/admin/manage-package/manage-package.component';


export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    },
    {
        path: 'admin', component: AdminComponent, canActivate:[AuthGuard]
    },
    {
        path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'aboutus', component: AboutusComponent, canActivate:[AuthGuard]
    },
    {
        path: 'createPackage', component: CreatePackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'package', component: PackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'managePackage', component: ManagePackageComponent, canActivate:[AuthGuard]
    }
    
];