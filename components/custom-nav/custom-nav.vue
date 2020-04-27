<template>
	<view id="box" style="position: fixed;width: 100%;z-index: 1001;top: 0">
		<view :style="style" :class="[bgColor]" class="custom-nav">
			<view class="title-content">
				<view class="left" @tap="backPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="title">
					<slot name="title"></slot>
				</view>
				<slot name="right"></slot>
			</view>
			<view class="search" v-if="showSearch">
				<uni-search-bar placeholder="输入关键字搜索" @confirm="search"></uni-search-bar>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '../uni-search-bar/uni-search-bar.vue'
	
	export default {
		name: 'customNav',
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: Boolean,
				default: false
			},
			showSearch: {
				type: Boolean,
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			}
		},
		components: {uniSearchBar},
		data() {
			return {
				statusBar: this.StatusBar,
				customBar: this.CustomBar
			}
		},
		computed: {
			style() {
				var statusBar = this.statusBar
				var customBar = this.customBar
				var bgImage = this.bgImage
				var style = `height: ${this.showSearch ? customBar + 45 : customBar}px;padding-top: ${statusBar}px`
				return style
			}
		},
		methods: {
			// 返回上一页
			backPage() {
				uni.navigateBack({
					delta: 1
				})
			},
			search(e) {
				this.$emit('submitSearch', e.value)
			}
		},
		mounted() {
			let info = uni.createSelectorQuery().in(this).select("#box")
			info.boundingClientRect(data => {
				this.$emit('customHeight', data.height)
			}).exec()
		}
	}
</script>

<style>
	.custom-nav {
		display: flex;
		position: relative;
		justify-content: center;
	}
	.custom-nav .search {
		width: 95%;
		margin: auto;
		position: absolute;
		bottom: 0;
	}
	.custom-nav .title-content {
		width: 100%;
		text-align: center;
		margin-top: 30upx;
		font-size: 35upx;
	}
	.custom-nav .left {
		float: left;
		margin-left: 15upx;
	}
</style>
