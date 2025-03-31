import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideAnimationsAsync()]
  providers: [
    importProvidersFrom(
      HttpClientModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    )
  ]
};
