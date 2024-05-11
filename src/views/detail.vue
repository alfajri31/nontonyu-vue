<script setup>

</script>

<template>
  <section class="ct-anime-bg container-fluid">
    <div class="ct-navbar navbar-expand-md navbar-light">
      <button class="navbar-toggler float-right mt-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row ml-md-5">
        <div class="col-md-2 anonime">Anonime</div>
        <ul class="collapse navbar-collapse row" id="navbarNav">
          <li class="col-md-2"><button class="ct-btn-dropdown"><a href="homepage.html">Home</a></button></li>
          <li class="col-md-2"><button class="ct-btn-dropdown"><a href="listAnime.html">List</a></button></li>
          <li class="col-md-4"><button class="ct-btn-dropdown"><a href="login.html">Login</a></button></li>
          <li class="col-md-4" ><input class="search-placeholder" placeholder="Search Anime or movie"/></li>
        </ul>
      </div>
    </div>
    <div class="mt-5"></div>
    <div class="row">
      <div class="col-sm-7">
        <div class="ml-md-5 ml-3">
          <div style="">
            <h2>One Piece - Episode 1018</h2>
            <div class="mt-3"></div>
          </div>
          <div style="">
            <span class="dots"></span>
            <video id="video"
                   controls=""
                   crossorigin=""
                   playsinline=""
            >
            </video>
          </div>
          <div class="row">
            <div class="col-sm-6 col-6" style=";margin-top:3rem;">
              <a href="/detail.html">
                <img class="card-img-top" src="/images/onepiece_detail.png">
              </a>
            </div>
            <div class="col-sm-6 col-6" style=";margin-top:2rem;margin-left: -3rem; ">
              <ul style="color: white;list-style-type: none;" class="">
                <li class="p-md-3">Type : <br><span style="color: grey">Tv</span></li>
                <li class="p-md-3">Status : <br><span style="color: grey">Ongoing</span></li>
                <li class="p-md-3">Studios : <br><span style="color: grey">Toei Animation</span></li>
                <li class="p-md-3">Duration : <br><span style="color: grey">24 Min</span></li>
                <li class="p-md-3">Genres : <br><span style="color: grey">Action,Adventure,Fantasy</span></li>
              </ul>
            </div>
          </div>
          <div style="margin-top: 3rem">
            <h2>Synopsis : </h2>
            <p style="color: white;text-align: justify">
              Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="ml-md-3">
          <h2 class="" id="popular_anime_h2">Popular Anime</h2>
        </div>
        <!--thumbnails-->
        <div class="w-100" style="display: flex; flex-wrap: wrap;" id="popular_anime">
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/onepiece.png">
            </a>
          </div>
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/boruto.png">
            </a>
          </div>
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/spyfamiliy.png">
            </a>
          </div>
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/aot.png">
            </a>
          </div>
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/tsubasa.png">
            </a>
          </div>
          <div style="margin: 1rem">
            <a href="/detail.html">
              <img class="card-img-top" src="/images/aoashi.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
