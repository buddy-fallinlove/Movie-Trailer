<template>
	<view class="min-picker">
		<view class="main-top">
			<view class="picer-top">
				<text @click="cacel">取消</text>
				<text @click="sure" class="sure">确认</text>
			</view>


		</view>

		<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" style="height:400rpx">
			<picker-view-column>
				<view class="picker item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			</picker-view-column>
			<picker-view-column>
				<view class="picker item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			</picker-view-column>
			<picker-view-column>
				<view class="picker item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			</picker-view-column>
		</picker-view>

	</view>
</template>
<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: true
			},
			startTime:{
				type:Array,
				default: () => [2018,6,5]
			},
			endTime:{
				type: Number,
				default: 2045
			}
		},
		data() {
			return {
				years: [],
				months: [],
				days: [],
				dayLength: 30,
				value: [0, 0, 0],
				visible: false,
				month: '',
				year: '',
				flag: false,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))}rpx;`
			}
		},
		mounted() {
			const time = new Date()
			const year = time.getFullYear()
			const month = time.getMonth() + 1
			this.month = month
			this.year = year
			this.getDaysInOneMonth(year, month)
			this.getYears()
			this.getMonth()
			this.getDays()
			// 获取初始位置
			this.value =  [this.years.indexOf(this.year),this.months.indexOf(this.month ),this.days.indexOf( time.getDate())]
			
		},
		methods: {
			bindChange: function(e) {
				this.getDaysInOneMonth(this.years[e.target.value[0]], this.months[e.target.value[1]])
				this.flag = true
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]] < 10 ? '0' + this.months[val[1]] : this.months[val[1]]
				this.day = this.days[val[2]] < 10 ? '0' + this.days[val[2]] : this.days[val[2]]
				this.getDays()
				// })
			},
			// 获得年份
			getYears() {
				
				for (let i = this.startTime[0]; i <= this.endTime; i++) {
					this.years.push(i)
				}
			},
			// 获取月份
			getMonth() {
				// const time = new Date()
				for (let i = 1; i <= 12; i++) {
					this.months.push(i)
				}
			},
			getDays() {
				this.days = []
				for (let i = 1; i <= this.dayLength; i++) {
					this.days.push(i)
				}
			},
			// 获取某年某月多少天
			getDaysInOneMonth(year, month) {
				month = parseInt(month, 10)
				var d = new Date(year, month, 0)
				this.dayLength = d.getDate()
				this.getDays()
				return d.getDate()
			},
			// 取消
			cacel() {
				this.$emit('cancel', false)
			},
			// 确认
			sure() {
				for (const [index, val] of this.months.entries()) {
					if (val < 10) {
						this.months[index] = '0' + val
					}
				}
				for (const [index, val] of this.days.entries()) {
					if (val < 10) {
						this.days[index] = '0' + val
					}
				}
				if (!this.flag) {
					this.$emit('cancel', false)
					this.$emit('sure', {
						a: this.years[this.value[0]],
						b: this.months[this.value[1]],
						c: this.days[this.value[2]]
					})
					return
				}
				this.$emit('cancel', false)
				this.$emit('sure', {
					a: this.year,
					b: this.month,
					c: this.day
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.main-top {
		padding: 0 30rpx;

		.picer-top {
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;

			.sure {
				color: #007aff;
			}
		}
	}

	.picker {
		text-align: center;
		line-height: 50rpx;
	}
</style>
