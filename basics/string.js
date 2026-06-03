const name="swornim"
age=19
console.log(name+age+" hululu");//old method and not reliable but usable

console.log(`my name is ${name} and age is ${age}`);
//this one is the new method, yesko sign ma chai confusion huna sakxa 
//''yo sign hoina  ``yo sign ho

const game=new String('ludokhelum')
console.log(game[0]);
//0 position ko letter display garauxa 
console.log(game);
//this provides the access of every letter in the string, simply word lai letter ma separate garna milxa
console.log(game.length);
//string ko length dinxa
console.log(game.toUpperCase());
//converts into uppercase
console.log(game.charAt(3));
//position ma kun character xa dekhauxa
console.log(game.indexOf('d'));
//character kun position ma xa dekhauxa

const newstring= game.substring(0,3)
console.log(newstring);
//0 dekhi 2 position samma ko character dekhauxa

const anstring=game.slice(-8,3)
console.log(anstring);
//substring jastai ho but negative value ni dina milxaa
//neg value le chaii reverse bata data dinxa

const string="      bang bang        "
console.log(string.trim());
//yeslaii chaii character ko agadai and paxadii ko unwanted spaces haru lai hataidinxa

const a="abcdefghijklmnopqrstuvwxxy"
console.log(a.replace('xy','yz'));
//const ko value replace garauxa

console.log(a.includes('abc'));
//yesle given character const ma xa ki naii and ans boolean ma auxa

console.log(game.split('-',3));

console.log(game.bold());//bold, yesma hunna browser ma dekhaula

console.log(a.anchor());
//yesma ramrari dekhaudaina ,browser ma dekhauxa


















