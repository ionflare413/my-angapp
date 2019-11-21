import { Component, Injectable } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
    selector: 'ag-grid-basic',
    template: `
    <div align="center">
    <br><br><br><br>
    <h1>Test ag-Grid</h1>
    <ag-grid-angular style="width: 800px; height: 500px;" class="ag-theme-balham" [rowData]="rowData"
        [columnDefs]="columnDefs" [modules]="modules">
    </ag-grid-angular>
    </div>
    `,
    styleUrls: []
})
export class agGridComponent {
    columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true},
        {headerName: 'Model', field: 'model', sortable: true, filter: true},
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    modules = AllCommunityModules;
}