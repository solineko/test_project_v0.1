let curve_echart=echarts.init(document.getElementById('section_demonstration_curve'));



$.ajax({
	url:"https://edu.telking.com/api?type=month",
	type:"GET",
	dataType:"jsonp",
	success:function(data){
		// JSON.stringify(data);
		// console.log(data["data"]);
		curve_echart.setOption({
			title:{
				text:"曲线数据展示",
				'x':"center",
			},
			xAxis:{
				name:"日期",
				data:data["data"]["xAxis"],
				axisLine:{
					show:false,
				},
			},
			yAxis:{
				name:"人",
				axisLine:{
					show:false,
				},
			},
			series:{
				type:"line",
				data:data["data"]["series"],
				label:{
					show:true,
				},
				smooth:true,
				itemStyle:{
					normal:{
						color:"#4586ef",
					},
				},
			},
			lineStyle:{
				color:"#94b7f5",
			},
		});
	},
});