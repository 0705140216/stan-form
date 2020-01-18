<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
/* #ifndef APP-PLUS-NVUE */
@import './assets/style/animate.min.css';
@import './assets/style/base.scss';
img {
	display: block;
	width: 100%;
}

/* #endif */
</style>
