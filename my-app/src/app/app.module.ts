import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent} from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfilComponent,
    MenuComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: "sign-up", component: SignUpComponent, pathMatch: "full"},
        {path: "menu", component: MenuComponent, pathMatch: "full",}
        {path: "user-profil", component: UserProfilComponent, pathMatch: "full"},
        {path: "", redirectTo: "user-profil", pathMatch: "full"}
      ],
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
