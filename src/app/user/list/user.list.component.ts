import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-user-list',
    templateUrl: './user.list.component.html',
    styleUrls: []
})
export class UserListComponent {

    constructor(private http: HttpClient, private router: Router) { }

    modules = AllCommunityModules;
    userList;
    isLoaded = false;
    groupMemberList : Object;
    columnDefs = [
        {headerName: 'ID', field: 'id', sortable: true, filter: true},
        {headerName: '名前', field: 'name', sortable: true, filter: true},
        {headerName: '所属', field: 'groupMemberId', sortable: true, filter: true},
    ];

    rowData;
    ngOnInit() {
        this.http.get(environment.api.baseUrl+ environment.api.endPoint.getUser).subscribe(usrlst => {
            this.userList = usrlst;
            this.rowData = usrlst;
            this.http.get(environment.api.baseUrl + environment.api.endPoint.getGroupMember).subscribe(grpMem => {
                this.groupMemberList = grpMem;
                for (let i = 0; i < this.userList.length; i++) {
                    var grpInfo  = _.find(this.groupMemberList, { 'id': this.userList[i].groupMemberId });
                    this.rowData[i].groupMemberId = grpInfo.name;
                }
                this.isLoaded = true;
            });
          });
    }
  
    onCellDoubleClicked(e : any){
        //console.log(e.data);
        let redirectUrl = "/user/register?id=" + e.data.id
        this.router.navigateByUrl(redirectUrl);
    }

    onNewUserClicked(){
        //console.log(e.data);
        let redirectUrl = "/user/register?id=" + 0
        this.router.navigateByUrl(redirectUrl);
    }

}