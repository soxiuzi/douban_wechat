<template>
	<view class="movie-item">
		<view class="item-top flex space-between">
			<text>分类标题</text>
			<text>查看更多></text>
		</view>
		<scroll-view class="movie-container" scroll-x="true">
			<block v-for="item in 10" :key="item">
				<view class="item-content flex flex-direction">
					<image style="width: 95px; height: 105px;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"
					 mode="aspectFill"></image>
					<text class="movie-name">电影名称</text>
					<view class="rate flex space-between">
						<uni-rate size="10" disabled="true" value="3.75"></uni-rate>
						<text>3.75</text>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'

	export default {
		name: 'movie-item',
		components: {
			uniRate
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.movie-item {
		white-space: nowrap;
	}
	.movie-item .item-top {
		margin: 20upx 20upx 0;
	}

	.movie-container {
		width: 100vw;
		padding: 20upx 0;
	}

	.item-content {
		display: inline-block;
		margin: 0 20upx;
		width: 23%;
	}

	.item-content image {
		border-radius: 15upx;
	}

	.item-content .movie-name {
		display: block;
		margin: 8upx 0;
	}
</style>
