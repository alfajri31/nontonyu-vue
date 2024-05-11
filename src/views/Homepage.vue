<template>
  <section class="ct-anime-bg container-fluid">
    <!--header-->
    <div class="ct-navbar navbar-expand-md navbar-light">
      <button class="navbar-toggler float-right mt-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row ml-md-5">
        <div class="col-md-2 anonime">Anonime</div>
        <ul class="collapse navbar-collapse row" id="navbarNav">
          <li class="col-md-2"><button class="ct-btn-dropdown"><a>Home</a></button></li>
          <li class="col-md-2"><button class="ct-btn-dropdown"><a>List</a></button></li>
          <li class="col-md-4"><button class="ct-btn-dropdown"><a>Login</a></button></li>
          <li class="col-md-4"><input  class="search-placeholder" placeholder="Search Anime or movie"/></li>
        </ul>
      </div>
    </div>
    <!--end headbar --->
    <div class="mt-5"></div>
    <div class="ml-sm-5 mr-sm-5">
      <div style="position: relative">
        <div class="anonime" style="font-size: 1.5rem">
          Explore
          <div style="color: grey;margin-left: 0.4rem">What are you gonna each today?</div>
        </div>
      </div>
      <!--carousel-->
      <div class="slide-anime">
        <img class="mySlides" src="/images/spy_carousel 1.png"/>
        <img class="mySlides" src="/images/spy_carousel 1.png"/>
        <img class="mySlides" src="/images/spy_carousel 1.png"/>
        <div class="carousel-detail">
          <div class="title-thumbnail">
            <div  style="color: white">
              Weather With You
            </div>
          </div>
          <div class="detail-thumbnail">
            Corrupt politicians, frenzied nationalists, and other warmongering forces constantly
            jeopardize the thin
            veneer of peace between neighboring countries Ostania and Westalis <br>
          </div>
        </div>
      </div>
      <!--end carousel-->
      <div class="new_release">
        <h1>New Realease</h1>
      </div>
      <!--thumbnails-->
      <div class="row mt-5">
        <div class="col-md-2 col-sm-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/onepiece.png">
          </router-link>
        </div>
        <div class="col-md-2 col-sm-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/boruto.png">
          </router-link>
        </div>
        <div class="col-md-2 col-xs-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/spyfamiliy.png">
          </router-link>
        </div>
        <div class="col-md-2 col-xs-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/aot.png">
          </router-link>
        </div>
        <div class="col-md-2 col-sm-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/tsubasa.png">
          </router-link>
        </div>
        <div class="col-md-2 col-sm-6 col-6">
          <router-link to="detail">
            <img class="card-img-top" src="/images/aoashi.png">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
