# feature1 

# Angular Project
ng new ng1

# Material Nav Bar
ng add @angular/material

# Creating shared module for imports
ng g m shared --export
add imports and exports  

## test html code
```
<h3>Raised Buttons</h3>
<div class="example-button-row">
  <button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>
```

# creating nav shell
ng g component shared/shell --export 
add some code 