import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

	let fixture;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppComponent],
			providers: [provideRoutes([])]
		});

		fixture = TestBed.createComponent(AppComponent);
	});

	it('should render a page-header element', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="page-header"]')).toBe(true);
	});

	it('should render the correct heading', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="page-header"]')).toBe(true);
		expect(fixture.nativeElement.querySelector('[test-id="page-header"]').innerText).toContain('ToeDoe');
	});

	it('should render navigation to Todos', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[ng-reflect-router-link="/"]')).toBe(true);
		expect(fixture.nativeElement.querySelector('[ng-reflect-router-link="/"]').innerText).toContain('Todos');
	});

	it('should render navigation to About', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[ng-reflect-router-link="/about"]')).toBe(true);
		expect(fixture.nativeElement.querySelector('[ng-reflect-router-link="/about"]').innerText).toContain('About');
	});

	it('should render a router-outlet', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('router-outlet')).toBe(true);
	});
});
