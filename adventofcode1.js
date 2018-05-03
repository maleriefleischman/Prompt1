var directions = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1', 'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5', 'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4', 'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5', 'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3', 'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3', 'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5', 'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1', 'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2', 'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3', 'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5', 'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3', 'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1', 'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5', 'L2', 'L1', 'R4']

var face = 'n'
var Yaxis = 0
var Xaxis = 0



for (i=0;i<directions.length;i++) {
var direction = directions[i]
var move = 0
if ( face == 'n' && direction.charAt(0) == 'L' ) {
	face = 'w';
	Xaxis = Xaxis + (parseInt(direction.substring(1)))*(-1);
	move = (parseInt(direction.substring(1)))*(-1) ;
	}
else if ( face == 'n' && direction.charAt(0) == 'R' ) {
	face = 'e'; 
	Xaxis = Xaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1))*1;
	}
else if ( face == 's' && direction.charAt(0) == 'L' ) {
	face = 'e' 
	Xaxis = Xaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
	
else if ( face == 's' && direction.charAt(0) == 'R' ) {
	face = 'w'
	Xaxis = Xaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
	
else if ( face == 'w' && direction.charAt(0) == 'L' ) {
	face = 's'
	Yaxis = Yaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
	
else if ( face == 'w' && direction.charAt(0) == 'R' ) {
	face = 'n' 
	Yaxis = Yaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
	
else if ( face == 'e' && direction.charAt(0) == 'L' ) {
	face = 'n' 
	Yaxis = Yaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
	
else {
	face = 's'
	Yaxis = Yaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
	
	
	}
	
alert('x' + String(Xaxis) + 'y' + String(Yaxis) + 'equals' + String( Math.abs(Xaxis) + Math.abs(Yaxis) ) ) 