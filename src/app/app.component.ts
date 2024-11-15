import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClientModule} from '@angular/common/http';
// import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserListComponent } from "./componentes/lista-usuarios/lista-usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService],
})
export class AppComponent {
  title = 'consumo-api-BLCE';
}
/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
@NgModule({
declarations: [
AppComponent
],
imports: [
BrowserModule,
HttpClientModule
],
providers: [UserService],
bootstrap: [AppComponent]
})
export class AppModule { }
/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumo-api-INICIALES';
}
*/

