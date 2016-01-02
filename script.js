var posToObj = function(str) {
	var temp = (str).split(" ");
	var obj = {
		x: temp[0],
		y: temp[1],
		z: temp[2]
	};
	return obj
};
var posToStr = function(obj) {
	return obj.x + " " + obj.y + " " + obj.z;
};

$(document).ready(function(){
	for(var y = 0; y < 12; y++)
	{
		var p = $('<a-plane rotation="' + 30*y + ' 0 0" height="0" width="0" position="0 0 4"></a-plane>');
		$('#scene').append(p);
		for(var x = 0; x < 6; x++)
		{
			var pvt = $('<a-plane rotation="0 ' + 30*x + ' 0" height="0" width="0" position="0 0 0"></a-plane>');
			var tick = $('<a-cube rotation="0 '+ (Math.random()*20+20) + ' '+ (Math.random()*20+20) + '" position="0 0 0" width="0.3" height="0.3" depth="0.3"></a-cube>');
			var pos_ani = $('<a-animation attribute="position" from="4 1.9 0" to="4 2.1 0" dur="' + (1000-Math.random()*50+100) + '" fill="forwards" direction="alternate" repeat="indefinite"></a-animation>')
			p.append(pvt);
			pvt.append(tick);
			tick.append(pos_ani);

		}
	}	
});
