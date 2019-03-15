let pie_echart=echarts.init(document.getElementById('section_demonstration_pie'));
$.ajax({
	url:"https://edu.telking.com/api?type=week",
	type:"GET",
	dataType:"jsonp",
	success:function(data){
		data=pie_data_handle(data);
		// console.log(data);
		pie_echart.setOption({
			title:{
				text:"Pie",
				x:"center",
			},
			series:{
				type:"pie",
				radius:'55%',
				data:data,
			},
		});
	}
});


function pie_data_handle(piedata){
	let temp=[];
	let data=piedata['data'];
	for(let i=0;i<data["xAxis"].length;i++){
		temp[i]={
			name:data["xAxis"][i],
			value:data["series"][i],
		};
	}
	return temp;
}
