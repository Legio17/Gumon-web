import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --- componets ---
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialComponent } from './pages/material/material.component';
import { OrderComponent } from './pages/order/order.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/notFound/notfound.component';

// header
import { HeaderComponent } from './header/header.component';

// navigation
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationLinkComponent } from './navigation/navigation-link/navigation-link.component';
import { NewsComponent } from './navigation/news/news.component';

// content
import { ContentComponent } from './content/content.component';

// footer
import { FooterComponent } from './footer/footer.component';

// routes
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    MaterialComponent,
    OrderComponent,
    LocationComponent,
    ContactComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationLinkComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
