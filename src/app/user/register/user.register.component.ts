import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
    selector: 'app-user-register',
    templateUrl: './user.register.component.html',
    styleUrls: []
})


export class UserRegisterComponent {

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
    userInfo = {};
    groupMember: Object = { body: [] };
    isMoreInfo_Checked = false;//checkbox is More Info
    isLoaded = false; //Already got dropdown input from DB

    selectedDate = {date: {year: 2019, month: 5, day: 8}};

    selectedId;
    selectedUser;

    initValCheckBox(){
        if (this.selectedUser.addInfo == 1)
        {
            this.isMoreInfo_Checked = true;
        }else
        {
            this.isMoreInfo_Checked = false;
        }
    }

    ngOnInit() {

        this.route.queryParams.subscribe(params => {
            this.selectedId = params['id'];
            console.log(this.selectedId);

            let reqUrl = "http://localhost:8080/get_userById?id="+this.selectedId;
            this.http.get(reqUrl).subscribe(user => {
                this.selectedUser = user[0];
                this.initValCheckBox();
                console.log(this.selectedUser);
            });
        });
        

            this.http.get('http://localhost:8080/get_groupMember',
                {}).subscribe(response => {
                    //成功時の処理
                    console.log(response);
                    this.groupMember = response;
                    this.isLoaded = true;
                }, error => {
                    //失敗時の処理
                    console.log(error);
                });
        }

    toggleDisable(event: any) {
            this.isMoreInfo_Checked = !this.isMoreInfo_Checked;
        }

    selectMatchedDropBox(outsrc : Number): Boolean{
        if (outsrc == this.selectedUser.groupMemberId) {
            return true;
        }
        else{
            return false;
        }
        
    }
    getDatePickerEvent(e: any){
        console.log(e);
        alert("555");
    }

    onSubmit() {
            //console.log(e.data);
            this.router.navigateByUrl('/user/list');
        }

}