# Sajad Wazin Personal Website

This is the codebase for [Sajad Wazin](https://linkedin.ca/in/sajad-wazin)'s personal website. 
This website is built using Angular 16.0.5, HTML5, CSS3, TypeScript 5.0.4 and RxJs 7.8.1.
It implements multiple different Angular Components which could be exported as standalone modules
from the codebase. Furthermore, the implementation of this website abides by SOLID programming
principles, as well as web design best practices.

## Angular CLI

- To build the website, one can use `ng build --configuration production --base-href={base_url}`. *Note:*
  If you change the base url, it must also be changed in `/src/app/app.module.ts` under the `providers`
  configuration object. The `useValue` property must reflect the base url where you want your website
  to be hosted. If you wish the website to be hosted at the root url, you can remove the configuration
  object altogether.

  
__Example of root URL configuration:__

```
// Inside: /src/app/app.module.ts
... // Other configuration parameters
  providers: [
    {provide: APP_BASE_HREF, useValue: '/~swazin/'} // <- Remove this line
  ],
...
```
and build with: ``ng build --configuration production``

__Example of different base URL configuration:__
```
// Inside: /src/app/app.module.ts
... // Other configuration parameters
  providers: [
    {provide: APP_BASE_HREF, useValue: '{your_base_url}'} 
  ],
...
```
and build with: `ng build --configuration production --base-href={base_url}`

- Generating new components/services/pipes can be done as usual with the Angular CLI:
  `ng generate {type} {name}`


- For development, we can serve a Node.js server using `npm start` from the root directory

## Angular Components

This website implements 4 different components `logo` (to be refactored), `navitem`, `portfolio-item`
(to be refactored) and `workitem`. The `workitem` and `logo` components are tightly coupled, meaning
that each `workitem` generates its own set of `logo` components. The modeling for each component is 
as follows:

### Work Item
```
HTML Selector: <work>

Inputs:
  name: string
  duration: string
  ref: string (Optional)
  role: string
  stack: string[] (Optional)

Outputs:
  none
  
Template:
  Will create a div (card) containing the name of the workplace and the role held at the 
  workplace on the first line.The second line contains the raw value of the duration 
  attribute. The ng-content inside the HTML tag <workitem> will be displayed as the description 
  of the role. Each element of the stack will instantiate a <logo> component and will be displayed
   under the description. The entire card opens a new tab redirecting to ref when clicked. 
  
```

This item serves the purpose of showing an itemized list of your past work experience. It can quickly generate dynamic
cards that give a good description of your role at past workplaces and hyperlink them to a reference/website It should
be instantiated as follows:
```
<work 
  [name]="name" 
  [duration]="duration" 
  [role]="role" 
  [stack]="[item1, item2, ...]" 
  [ref]="ref">
  
      {Work description}
      
</work>
```

### Logo 
*(to be refactored)*
```
HTML Selector: <logo>

Inputs: 
  name: string
  logo: string (currently obselete)
  color: number (currently obselete)
  
Outputs:
  none
  
Template:
  A div that contains the name of a skill or tag pertaining to a specific workitem.
```

This is used when `workitem` components are instantiated. The template for `workitem` will instantiate
one `logo` component for each element of the `skills` array in the `workitem`. This component may be
refactored as a template for `workitem` because its architectural scope doesn't escape that of the latter.
This component should not be instantiated manually as it is tightly coupled to `workitem`.
