import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './module/service/http.service';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginAuthGuard } from './module/service/login-auth.guard';
import { LocalstoreService } from './module/service/localstore.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [HttpService,LoginAuthGuard,LocalstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
