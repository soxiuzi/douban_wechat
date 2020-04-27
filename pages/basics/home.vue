<template>
	<view class="page">
		<cu-custom @submitSearch="searchMovies" @customHeight="setMarginTop" :showSearch="showSearch" bgColor="bg-gradual-green">
			<block slot="title">首页</block>
		</cu-custom>
		<scroll-view :style="{marginTop: marginTop + 'px'}" scroll-y>
			<movie-item></movie-item>
		</scroll-view>
	</view>
</template>

<script>
	import movieItem from '@/components/custom-movie--item/custom-movie--item.vue'
	
	export default {
		name: "index",
		components: {movieItem},
		data() {
			return {
				CustomBar: this.CustomBar,
				showSearch: true,
				marginTop: 0,
			}
		},
		methods: {
			// 设置滚动栏初始margin
			setMarginTop(height) {
				const that = this
				this.marginTop = height
			},
			searchMovies(keyword) {
				console.log('搜索关键字：', keyword)
			}
		}

	}
</script>

<style>
</style>
