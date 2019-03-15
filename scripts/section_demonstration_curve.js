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
				text:"Curve",
				x:"center",
			},
			xAxis:{
				name:"days",
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