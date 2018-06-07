<template>
	<div>
		<carousel :perPageCustom="[[575, 1], [768, 2], [1024, 3]]" :autoplay="true" :autoplayTimeout="1500" :scrollPerPage="false" :loop="true" :autoplayHoverPause="true" :navigationEnabled="true" :navigationPrevLabel="'Back'" :navigationNextLabel="'Next'" :minSwipeDistance="1">
		  <slide>
		    <img src="https://livingnomads.com/wp-content/uploads/2017/06/05/rock-water-bay-beach-resort-and-spa-paradise-in-phan-thiet-39.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://growdiaries.s3-accelerate.amazonaws.com/static/post/photo/945/154279_delahaze-grow-from-paradise-seeds_paradise-seeds_delahaze_l.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://www.hbw.com/sites/default/files/styles/ibc_1k/public/ibc/p/6275_japanese_paradise_flycatcher_terpsiphone_atrocaudata_periophthalmica_lanyu_island_taiwan_20170509_1_1000.jpg?itok=sdsJRZlg" alt="">
		  </slide>
		  <slide>
		    <img src="https://www.jungseed.com/PIF/13713/JungSeed.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://f4.bcbits.com/img/a2005037481_5.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://secure.img1-fg.wfcdn.com/im/47526797/resize-h700-p1-w700%5Ecompr-r85/3003/30032585/Blissful+Paradise+Painting+on+Canvas.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://www.hpsseed.com/PIF/05797/FuseablesParadiseIslandHybridCalibrachoa.jpg" alt="">
		  </slide>
		  <slide>
		    <img src="https://cdn.shopify.com/s/files/1/2927/2664/products/paradise-found-books-758492-2_x700.jpg?v=1525842797" alt="">
		  </slide>
		</carousel>
	</div>
</template>
<script>

	import { Carousel, Slide } from 'vue-carousel';
export default {
	name: 'Test',
	components: {
	    Carousel,
	    Slide
	}
};
</script>
<style>
	.hola{
		width: 10%;
	}
	.VueCarousel-slide{
		text-align: center;
	}
	.VueCarousel-slide img {
    	width: 80%;
	}
	@media (min-width: 989px){
		.VueCarousel-dot-container .VueCarousel-dot:nth-child(6), .VueCarousel-dot-container .VueCarousel-dot:nth-child(7) {
	    	display: none;
		}
	}
	@media (max-width: 575px){
		.VueCarousel-dot-container .VueCarousel-dot:nth-child(odd) {
	    	display: none;
		}
	}
</style>
