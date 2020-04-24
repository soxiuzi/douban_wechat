<template name="index">
	<view>
		<scroll-view scroll-y class="page">
			首页
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "index",
		data() {},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
