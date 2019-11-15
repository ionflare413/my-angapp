import {Component} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Selector } from 'angular-bootstrap-md/lib/free/modals/modal.options';
@Component({
    selector : "mdbPlayGround",
    template: `
    <br><br><br>
    <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
<br>
<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>

<br>

<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
<br>

<mdb-carousel [isControls]="true" class="carousel slide" [animation]="'slide'">
  <mdb-carousel-item>
    <div class="view">
      <video class="video-fluid" autoplay loop>
        <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" />
      </video>
      <div class="mask rgba-indigo-light waves-light" mdbWavesEffect></div>
    </div>

    <div class="carousel-caption">
      <div class="animated fadeInDown">
        <h3 class="h3-responsive">Light mask</h3>
        <p>First text</p>
      </div>
    </div>
  </mdb-carousel-item>
  <mdb-carousel-item>
    <div class="view">
      <video class="video-fluid" autoplay loop>
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video>
      <div class="mask rgba-purple-slight waves-light" mdbWavesEffect></div>
    </div>

    <div class="carousel-caption">
      <div class="animated fadeInDown">
        <h3 class="h3-responsive">Super light mask</h3>
        <p>Secondary text</p>
      </div>
    </div>
  </mdb-carousel-item>
  <mdb-carousel-item>
    <div class="view">
      <video class="video-fluid" autoplay loop>
        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
      </video>
      <div class="mask rgba-black-strong waves-light" mdbWavesEffect></div>
    </div>

    <div class="carousel-caption">
      <div class="animated fadeInDown">
        <h3 class="h3-responsive">Strong mask</h3>
        <p>Third text</p>
      </div>
    </div>
  </mdb-carousel-item>
</mdb-carousel>
<br>


<div class="btn-group" mdbDropdown>
  <button mdbDropdownToggle type="button" mdbBtn color="primary" class="dropdown-toggle waves-light"
    mdbWavesEffect>
    Basic dropdown
  </button>

  <div class="dropdown-menu dropdown-primary">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="divider dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
<div>
<div class="alert alert-primary" role="alert">
  This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
  This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
</div>

<!--Table-->
<table class="table table-striped w-auto">

  <!--Table head-->
  <thead>
      <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Country</th>
          <th>City</th>
          <th>Position</th>
          <th>Age</th>
      </tr>
  </thead>
  <!--Table head-->

  <!--Table body-->
  <tbody>
      <tr class="table-info">
          <th scope="row">1</th>
          <td>Kate</td>
          <td>Moss</td>
          <td>USA</td>
          <td>New York City</td>
          <td>Web Designer</td>
          <td>23</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Anna</td>
          <td>Wintour</td>
          <td>United Kingdom</td>
          <td>London</td>
          <td>Frontend Developer</td>
          <td>36</td>
      </tr>
      <tr class="table-info">
          <th scope="row">3</th>
          <td>Tom</td>
          <td>Bond</td>
          <td>Spain</td>
          <td>Madrid</td>
          <td>Photographer</td>
          <td>25</td>
      </tr>
      <tr>
          <th scope="row">4</th>
          <td>Jerry</td>
          <td>Horwitz</td>
          <td>Italy</td>
          <td>Bari</td>
          <td>Editor-in-chief</td>
          <td>41</td>
      </tr>
      <tr class="table-info">
          <th scope="row">5</th>
          <td>Janis</td>
          <td>Joplin</td>
          <td>Poland</td>
          <td>Warsaw</td>
          <td>Video Maker</td>
          <td>39</td>
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Gary</td>
          <td>Winogrand</td>
          <td>Germany</td>
          <td>Berlin</td>
          <td>Photographer</td>
          <td>37</td>
      </tr>
      <tr class="table-info">
          <th scope="row">7</th>
          <td>Angie</td>
          <td>Smith</td>
          <td>USA</td>
          <td>San Francisco</td>
          <td>Teacher</td>
          <td>52</td>
      </tr>
      <tr>
          <th scope="row">8</th>
          <td>John</td>
          <td>Mattis</td>
          <td>France</td>
          <td>Paris</td>
          <td>Actor</td>
          <td>28</td>
      </tr>
      <tr class="table-info">
          <th scope="row">9</th>
          <td>Otto</td>
          <td>Morris</td>
          <td>Germany</td>
          <td>Munich</td>
          <td>Singer</td>
          <td>35</td>
      </tr>
  </tbody>
  <!--Table body-->


</table>
<!--Table-->
    `
})
export class mdbPlayGround{


}