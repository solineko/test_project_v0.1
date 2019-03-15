let bar_echart=echarts.init(document.getElementById('section_demonstration_bar'));



$.ajax({
	url:"https://edu.telking.com/api?type=week",
	type:"GET",
	dataType:"jsonp",
	success:function(data){
		bar_echart.setOption({
			title:{
				text:"Bar",
				x:"center",
			},
			xAxis:{
				data:data["data"]["xAxis"],
				axisLine:{
					show:false,
				},
			},
			yAxis:{
				name:"nums",
				axisLine:{
					show:false,
				},
			},
			series:{
				type:"bar",
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