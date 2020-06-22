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
import { NewsComponent } from './pages/news/news.component';

// ----- Angular Materials -----
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// header
import { HeaderComponent } from './header/header.component';

// navigation
import { NavigationComponent } from './pages/material/components/navigation/navigation.component';
import { NavigationLinkComponent } from './pages/material/components/navigation/navigation-link/navigation-link.component';

// content
import { ContentComponent } from './content/content.component';

// footer
import { FooterComponent } from './footer/footer.component';

// routes
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    MaterialComponent,
    OrderComponent,
    NewsComponent,
    LocationComponent,
    ContactComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationLinkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
