var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="Neel";
names[5]="Dhoni";
names[6]="kohli";
names[7]="rohit";
names[8]="sachin";
names[9]="jerry";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}