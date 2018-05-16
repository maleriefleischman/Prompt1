var directions = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1', 'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5', 'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4', 'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5', 'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3', 'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3', 'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5', 'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1', 'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2', 'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3', 'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5', 'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3', 'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1', 'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5', 'L2', 'L1', 'R4']

//the starting direction is North, but this variable is subject to change with each direction
var face = 'n'
// North / South movement through the grid, increase = N, decrease = S
var Yaxis = 0
// East / West movement through the grid, increase = E, decrease = W
var Xaxis = 0


// loop through the array looking at each direction from left to right
for (i=0;i<directions.length;i++) {
// the direction we are currently looking at
var direction = directions[i]
// number of paces 
var move = 0

// if you are already facing North and the directions state to turn Left then you are now facing West, X axis will decrease with each pace
if ( face == 'n' && direction.charAt(0) == 'L' ) {
	face = 'w';
	Xaxis = Xaxis + (parseInt(direction.substring(1)))*(-1);
	move = (parseInt(direction.substring(1)))*(-1) ;
	}
//if you are already facing North and directions state to turn Right then you are now facing East, X axis will increase with each pace
else if ( face == 'n' && direction.charAt(0) == 'R' ) {
	face = 'e'; 
	Xaxis = Xaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
// if you are facing South and directions state to turn Left then you are now facing East, X axis will increase with each pace
else if ( face == 's' && direction.charAt(0) == 'L' ) {
	face = 'e' 
	Xaxis = Xaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
//if you are facing South and directions state to turn Right then you are now facing West, X axis will decrease with each pace	
else if ( face == 's' && direction.charAt(0) == 'R' ) {
	face = 'w'
	Xaxis = Xaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
//if you are facing West and directions state to turn Left then you are now facing South, Y axis will decrease with each pace	
else if ( face == 'w' && direction.charAt(0) == 'L' ) {
	face = 's'
	Yaxis = Yaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
//if you are facing West and directions state to turn Right then you are now facing North, Y axis will increase with each pace	
else if ( face == 'w' && direction.charAt(0) == 'R' ) {
	face = 'n' 
	Yaxis = Yaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
//if you are facing East and directions state to turn Left then you are now facing North, Y axis increases	
else if ( face == 'e' && direction.charAt(0) == 'L' ) {
	face = 'n' 
	Yaxis = Yaxis + parseInt(direction.substring(1))
	move = parseInt(direction.substring(1));
	}
//if you are facing East and directions state to turn Right then you are now facing south, Y axis decreases	
else {
	face = 's'
	Yaxis = Yaxis + (parseInt(direction.substring(1)))*(-1)
	move = (parseInt(direction.substring(1)))*(-1);
	}
	
	
	}
	
alert('x' + String(Xaxis) + 'y' + String(Yaxis) + 'equals' + String( Math.abs(Xaxis) + Math.abs(Yaxis) ) ) 
