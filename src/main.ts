import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,    // RouterModule and routing configuration
      HttpClientModule,    // HTTP services
      MatCardModule,       // Material Card module
      MatFormFieldModule,  // Material FormField module
      MatInputModule,      // Material Input module
      ReactiveFormsModule  // Reactive forms support
    )
  ]
}
)
  .catch((err) => console.error(err));
