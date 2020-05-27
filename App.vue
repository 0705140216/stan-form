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

<style lang="scss">
/*每个页面公共css */
/* #ifndef APP-PLUS-NVUE */
@import './assets/style/main.css';
@import './assets/style/animate.min.css';
@import './assets/style/base.scss';
@import './assets/style/st-ui.scss';
.container_box {
	display: flex;
	flex-direction: column;
	padding: 16rpx;
}
/* #endif */
</style>
