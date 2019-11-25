import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'; //for DatePicker
import { DatePipe } from '@angular/common';
import { debug } from 'util';

@Injectable()
@Component({
    selector: 'app-user-register',
    templateUrl: './user.register.component.html',
    styleUrls: []
})


export class UserRegisterComponent {

    constructor(private http: HttpClient, private router: Router
        , private route: ActivatedRoute
        , private datePipe: DatePipe) { }
    
    text: string;
    //====[***initial values***]====
    userInfo = {
        id: 0,
        name: "",
        //birthDate: new FormControl(new Date()),
        birthDate: new Date(),
        groupMemberId: 1,
        address: "",
        note: "",
        addInfo: false,
        isDeleted: false,
        isActive: true,
        createTime: new Date(),
        updateTime: new Date(),
    };

    groupMember: Object = { body: [{id: 0, name: "Initial Value"}] };
    isMoreInfo_Checked = false;//checkbox is More Info
    isLoaded = false; //Already got dropdown input from DB
  

    //Just initial vaule. nothing more
    FormPickerDate = new FormControl("2019-11-12T00:00:00"); 
    stringDate : string= "2019-11-12";

    selectedId;
    selectedUser;

    initValCheckBox() {
        if (this.userInfo.addInfo == true) {
            this.isMoreInfo_Checked = true;
        } else {
            this.isMoreInfo_Checked = false;
        }
    }

    ngOnInit() {

        //console.log(this.FormPickerDate);
        this.route.queryParams.subscribe(params => {
            this.selectedId = params['id'];

            //Create a new User
            if(this.selectedId == 0)
            {

            }
            else{
                let reqUrl = "http://localhost:8080/get_userById?id=" + this.selectedId;
                this.http.get(reqUrl).subscribe(user => {
                    this.userInfo = user[0];
                    this.initValCheckBox();
                    //this.date = new FormControl(this.selectedUser.birthDate);
                    this.stringDate = user[0].birthDate;
                    let formatDBtoDatePicker = user[0].birthDate.split(".");
                    let formatedTime = formatDBtoDatePicker[0];
                    this.FormPickerDate = new FormControl(formatedTime);
                    
                });
            }
        });
        this.http.get('http://localhost:8080/get_groupMember',
            {}).subscribe(response => {
                //成功時の処理
                //console.log(response);
                this.groupMember = response;
                this.isLoaded = true;
            }, error => {
                //失敗時の処理
                console.log(error);
            });
    }

    genHeader() {
        if(this.selectedId == 0)
        {
            return "Creating a new User"
        }
        else{
            return "User ID : " + this.userInfo.id
        }
    }


    toggleDisable(event: any) {
        this.isMoreInfo_Checked = !this.isMoreInfo_Checked;
    }

    selectMatchedDropBox(outsrc: Number): Boolean {
        if (outsrc == this.userInfo.groupMemberId) {
            return true;
        }
        else {
            return false;
        }

    }
    changeDateValue(e: any) {
        //this.datePipe.transform(e.value, 'MM-dd-yyyy');
        //this.selectedDatePicker = this.datePipe.transform(e.value, 'yyyy-MM-dd');
        this.stringDate = this.datePipe.transform(e.value, 'yyyy-MM-dd');
        //console.log(this.datePipe.transform(e.value, 'yyyy-MM-dd'));
        //alert("555");
    }
    changeName(e: any) {
        //console.log(e);
    }
    getSelectedValue(e: any){
        this.userInfo.groupMemberId = e
        //console.log(this.userInfo.groupMemberId);
    }

    onSubmit() {
        
        event.preventDefault();
        var datareq = {
            id: this.userInfo.id,
            //document.get
            name: (document.getElementById('userName') as HTMLFormElement).value,
            groupMemberId: this.userInfo.groupMemberId,
            birthDate: this.stringDate,
            address: (document.getElementById('userAddress') as HTMLFormElement).value,
            note: (document.getElementById('userNote') as HTMLFormElement).value,
            isAddInfo: this.isMoreInfo_Checked,
            isDeleted: false,
            isActive: true,
            createTime: this.datePipe.transform(this.userInfo.createTime, 'yyyy-MM-dd'),
            updateTime: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
        }
       
        var apiURL: string;
        //console.log(datareq);
        if(this.userInfo.id != 0)
        {
            apiURL = "http://localhost:8080"+"/update_userById";
        }
        else
        {
            apiURL = "http://localhost:8080"+"/create_user";
        }

        this.http.post(apiURL,
        datareq, {headers: {'Content-Type':'application/json'}}).subscribe(response => {
            //成功時の処理
            //console.log(response);
            this.router.navigateByUrl('/user/list');
            //this.groupMember = response;
            //this.isLoaded = true;
        }, error => {
            //失敗時の処理
            console.log(error);
        });

        
    }

}