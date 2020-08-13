import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
console.log("New")

if(location.host.toString() !== "localhost:4200" && location.protocol !== 'https:'){
	location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
