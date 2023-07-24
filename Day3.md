### Day 3
##Routing
- To enable a user to display a specific component by clicking a link, you need to route the component.
- To route a component in the AppModule you should open the app.module.ts and add the route to the configuration of the RouterModule.
```nodejs
@NgModule({
	imports: [
		RouterModule.forRoot([
			{ 
			path: 'register-passenger',
			component: PassengerComponent 
			}
		]),
	],
)}
```
- Angular loads a routed component into the router outlet, whenever a user clicks an action link with the components router link.
```HTML
<a [routerLink]="['/register-passenger']">Open Register Passengers<a>
```
- You can think of a `<router-outlet>` tag as a placeholder for the routed
components. You can find a router outlet in the `ClientApp/src/app/app.component.html` file when you create a new project using the default template.