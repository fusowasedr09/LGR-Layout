const url = "https://script.google.com/macros/s/AKfycbwI0Wr02aZTlcv-Vr4FOYHfaq-uYICg5iinDLwLZd6XPgKIdnQsgpz4NT3BdsxMTFM/exec" // スプレッドシートのデータのURLを適宜置き換えて使用
const options = {
	method: "GET"
};

//NodeCG:Replicantの宣言
const gametitleD_Rep = nodecg.Replicant("gametitleD");
const gamecategoryD_Rep = nodecg.Replicant("gamecategoryD");
const gameestimateD_Rep = nodecg.Replicant("gameestimateD");
const playerD_Rep = nodecg.Replicant("playerD");
const playerDtwitter_Rep = nodecg.Replicant("playerDtwitter");
const playerDniconico_Rep = nodecg.Replicant("playerDniconico");
const playerDyoutube_Rep = nodecg.Replicant("playerDyoutube");
const playerDtwitch_Rep = nodecg.Replicant("playerDtwitch");
const commD_Rep = nodecg.Replicant("commD");

//json取得
function getJson(url, options){
	return fetch(url, options)
	.then(response => response.json());
}

async function fetchJson(url, options, counter){
	const response = await getJson(url,options);
	var json_number = counter; //ボタン処理用の関数
	console.log(response[json_number]);
	
	// ゲーム情報をReplicantに入れる
	gametitleD_Rep.value = response[json_number].gametitle;
	gamecategoryD_Rep.value = response[json_number].category;
	gameestimateD_Rep.value = response[json_number].estimate;
	playerD_Rep.value = response[json_number].player;
	
	// プレイヤーのTwitch,Twitter,niconicoの情報をReplicantに入れる
	playerDtwitch_Rep.value = response[json_number].twitch;
	playerDtwitter_Rep.value = response[json_number].twitter;
	playerDyoutube_Rep.value = response[json_number].youtube;
	playerDniconico_Rep.value = response[json_number].niconico;
	commD_Rep.value = response[json_number].comm;
}

// ボタン処理（ID読み込み）
document.getElementById('submitBtn').addEventListener('click', () =>{
	const screenD_id = document.getElementById('ScreenD_id').value;
	fetchJson(url, options, screenD_id);
})

// Dashboardの情報を最新のデータに更新する処理
gametitleD_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameTitleD").innerHTML = newVal;
})
gamecategoryD_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameCategoryD").innerHTML = newVal;
})
gameestimateD_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameEstimateD").innerHTML = newVal;
})
playerD_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameRunnerD").innerHTML = newVal;
})
commD_Rep.on('change',(newVal)=>{
	document.getElementById("playerD_Comm").innerHTML = newVal;
})
