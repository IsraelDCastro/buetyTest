<template>
  <div id="app" class="page text-center">
    <div class="">
      <div class="row">
        <div class="col-12">
          <div class="text-center margin-bottom">
            <router-link :to="{ name: 'HelloWorld' }" class="navItem">
              <vs-button vs-type="primary-flat">HelloWorld</vs-button>
            </router-link>
            <router-link to="/about" class="navItem">
              <vs-button vs-type="primary-flat">About</vs-button>
            </router-link>
            <router-link to="/contact" class="navItem">
              <vs-button vs-type="success-flat">
                Contact
              </vs-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <transition :duration="{ enter: 2500, leave: 250 }" name="router-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
      <router-view/>
    </transition>
    <!-- <transition name="router-anim" >
      <router-view/>
    </transition> -->
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
  
export default {
  name: 'App',
  components: { AtomSpinner }
}
</script>

<style>
.navItem{
  padding: 0 16px;
}
.margin-bottom{
    margin-bottom: 2em;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
/*@import 'node_modules/slick-carousel/slick/slick.css';*/
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css');
#app {
  background-color: #fff;
  width: 90%;
  padding: 30px;
  border-radius: 10px;
  margin: 0 auto;
}
body{
  background-color: rgb(233, 233, 233);
  font-family: Arial, Helvetica, sans-serif;
}
.text {
    font-size: 16px;
}
.page{
  overflow: hidden;
}
/*.router-anim-enter-active {
  animation: yourAnimation 5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: yourAnimation 1s;
}

@keyframes yourAnimation{
    0%{
        transform: rotate(180deg) scale(1.5) translateX(100px) translateY(-20%) skewX(15deg) skewY(-25deg);
        transform-origin: 50% 50%;
        }
}

.elementToAnimate{
    animation: yourAnimation 3s infinite 0s linear;
}*/
</style>
