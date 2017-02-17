import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
	enableProdMode();
}

export function main() {
	return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
	main();
}

if (document.readyState !== 'complete') {
	document.addEventListener('DOMContentLoaded', main);
}
