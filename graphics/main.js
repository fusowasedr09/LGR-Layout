//NodeCG:Replicantの宣言
const gametitleA_Rep = nodecg.Replicant("gametitleA");
const gamecategoryA_Rep = nodecg.Replicant("gamecategoryA");
const gameestimateA_Rep = nodecg.Replicant("gameestimateA");
const playerA_Rep = nodecg.Replicant("playerA");
const playerAtwitter_Rep = nodecg.Replicant("playerAtwitter", {defaultValue: ""});
const playerAniconico_Rep = nodecg.Replicant("playerAniconico");
const playerAyoutube_Rep = nodecg.Replicant("playerAyoutube");
const playerAtwitch_Rep = nodecg.Replicant("playerAtwitch");
const commA_Rep = nodecg.Replicant("commA");

const gametitleB_Rep = nodecg.Replicant("gametitleB");
const gamecategoryB_Rep = nodecg.Replicant("gamecategoryB");
const gameestimateB_Rep = nodecg.Replicant("gameestimateB");
const playerB_Rep = nodecg.Replicant("playerB");
const playerBtwitter_Rep = nodecg.Replicant("playerBtwitter");
const playerBniconico_Rep = nodecg.Replicant("playerBniconico");
const playerByoutube_Rep = nodecg.Replicant("playerByoutube");
const playerBtwitch_Rep = nodecg.Replicant("playerBtwitch");
const commB_Rep = nodecg.Replicant("commB");

const gametitleC_Rep = nodecg.Replicant("gametitleC");
const gamecategoryC_Rep = nodecg.Replicant("gamecategoryC");
const gameestimateC_Rep = nodecg.Replicant("gameestimateC");
const playerC_Rep = nodecg.Replicant("playerC");
const playerCtwitter_Rep = nodecg.Replicant("playerCtwitter");
const playerCniconico_Rep = nodecg.Replicant("playerCniconico");
const playerCyoutube_Rep = nodecg.Replicant("playerCyoutube");
const playerCtwitch_Rep = nodecg.Replicant("playerCtwitch");
const commC_Rep = nodecg.Replicant("commC");

const gametitleD_Rep = nodecg.Replicant("gametitleD");
const gamecategoryD_Rep = nodecg.Replicant("gamecategoryD");
const gameestimateD_Rep = nodecg.Replicant("gameestimateD");
const playerD_Rep = nodecg.Replicant("playerD");
const playerDtwitter_Rep = nodecg.Replicant("playerDtwitter");
const playerDniconico_Rep = nodecg.Replicant("playerDniconico");
const playerDyoutube_Rep = nodecg.Replicant("playerDyoutube");
const playerDtwitch_Rep = nodecg.Replicant("playerDtwitch");
const commD_Rep = nodecg.Replicant("commD");

const board_Rep = nodecg.Replicant("board");
const hostReplicant = nodecg.Replicant("host");

const ctx = document.createElement('canvas').getContext('2d');

// データ更新処理
gametitleA_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameTitleA").innerHTML = newVal;
})
gamecategoryA_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameCategoryA").innerHTML = newVal;
})
gameestimateA_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameEstimateA").innerHTML = newVal;
})
playerA_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerA_name").innerHTML = newVal;
	document.getElementById("PlayerA_name2").innerHTML = newVal;
	const textElem = document.getElementById("PlayerA_name2");
})
playerAtwitter_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerA_twitter").innerHTML = newVal;
})
playerAtwitch_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerA_twitch").innerHTML = newVal;
})
playerAniconico_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerA_niconico").innerHTML = newVal;
})
playerAyoutube_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerA_youtube").innerHTML = newVal;
})
commA_Rep.on('change',(newVal)=>{
	document.getElementById("CommA_Name").innerHTML = newVal;
})

gametitleB_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameTitleB").innerHTML = newVal;
})
gamecategoryB_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameCategoryB").innerHTML = newVal;
})
gameestimateB_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameEstimateB").innerHTML = newVal;
})
playerB_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerB_name").innerHTML = newVal;
	document.getElementById("PlayerB_name2").innerHTML = newVal;
})
playerBtwitter_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerB_twitter").innerHTML = newVal;
})
playerBtwitch_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerB_twitch").innerHTML = newVal;
})
playerBniconico_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerB_niconico").innerHTML = newVal;
})
playerByoutube_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerB_youtube").innerHTML = newVal;
})
commB_Rep.on('change',(newVal)=>{
	document.getElementById("CommB_Name").innerHTML = newVal;
})

gametitleC_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameTitleC").innerHTML = newVal;
})
gamecategoryC_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameCategoryC").innerHTML = newVal;
})
gameestimateC_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameEstimateC").innerHTML = newVal;
})
playerC_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerC_name").innerHTML = newVal;
	document.getElementById("PlayerC_name2").innerHTML = newVal;
})
playerCtwitter_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerC_twitter").innerHTML = newVal;
})
playerCtwitch_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerC_twitch").innerHTML = newVal;
})
playerCniconico_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerC_niconico").innerHTML = newVal;
})
playerCyoutube_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerC_youtube").innerHTML = newVal;
})
commC_Rep.on('change',(newVal)=>{
	document.getElementById("CommC_Name").innerHTML = newVal;
})

gametitleD_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameTitleD").innerHTML = newVal;
})
gamecategoryD_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameCategoryD").innerHTML = newVal;
})
gameestimateD_Rep.on('change',(newVal)=>{
	document.getElementById("text_gameEstimateD").innerHTML = newVal;
})
playerD_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerD_name").innerHTML = newVal;
	document.getElementById("PlayerD_name2").innerHTML = newVal;
})
playerDtwitter_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerD_twitter").innerHTML = newVal;
})
playerDtwitch_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerD_twitch").innerHTML = newVal;
})
playerDniconico_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerD_niconico").innerHTML = newVal;
})
playerDyoutube_Rep.on('change',(newVal)=>{
	document.getElementById("PlayerD_youtube").innerHTML = newVal;
})
commD_Rep.on('change',(newVal)=>{
	document.getElementById("CommD_Name").innerHTML = newVal;
})

board_Rep.on('change',(newVal)=>{
	document.getElementById("board").innerHTML = newVal;
})

hostReplicant.on('change',(newVal)=>{
	document.getElementById("host").innerHTML = newVal;
})