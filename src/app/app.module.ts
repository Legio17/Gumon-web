import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// --- componets ---
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationLinkComponent,
    NewsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
