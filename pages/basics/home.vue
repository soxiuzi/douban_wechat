<template>
	<view :style="{paddingTop: paddingTop + 'px'}">
		<cu-custom class="customNav" :isBack="true" bgColor="bg-gradual-green" >
			<block slot="title">首页</block>
		</cu-custom>
		<scroll-view scroll-y>
			<view v-for="item in 100" :key="item">
				{{ item }}项
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				CustomBar: this.CustomBar,
				showSearch: false,
				paddingTop: 0
			}
		},
		created() {
			this.paddingTop = this.showSearch ? 105 : 60
		}
		
	}
</script>

<style>
</style>
