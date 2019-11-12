# feature 5 how much is the station being Utilized?

# adding bar chart
ng generate ng2-charts-schematics:bar bar-chart

# update nav bar
## update hawaiian-vikings/ng1/src/app/app-routing.module.ts
1. import 
2. add path

## update hawaiian-vikings/ng1/src/app/shared/shell/shell.component.html
`<a mat-list-item routerLink="/chart4" (click)="drawer.close()">Chart 4</a>`

# import data from data.ts
`import {linedatalabel2, linedataset2, linedatamark2} from '../data';`



