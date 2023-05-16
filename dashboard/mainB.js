const url = "https://script.google.com/macros/s/AKfycbzSCc-oIr1YEsmwlUHTxG437KhitIVezlRqb0XredEOJ3Wh0Xibix0CHHNKs7Lowvs/exec" // スプレッドシートのデータのURLを適宜置き換えて使用
const options = {
	method: "GET"
};

//NodeCG:Replicantの宣言
const gametitleB_Rep = nodecg.Replicant("gametitleB");
const gamecategoryB_Rep = nodecg.Replicant("gamecategoryB");
const gameestimateB_Rep = nodecg.Replicant("gameestimateB");
const playerB_Rep = nodecg.Replicant("playerB");
const playerBtwitter_Rep = nodecg.Replicant("playerBtwitter");
const playerBniconico_Rep = nodecg.Replicant("playerBniconico");
const playerByoutube_Rep = nodecg.Replicant("playerByoutube");
const playerBtwitch_Rep = nodecg.Replicant("playerBtwitch");
const commB_Rep = nodecg.Replicant("commB");

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
	gametitleB_Rep.value = response[json_number].gametitle;
	gamecategoryB_Rep.value = response[json_number].category;
	gameestimateB_Rep.value = response[json_number].estimate;
	playerB_Rep.value = response[json_number].player;
	
	// プレイヤーのTwitch,Twitter,niconicoの情報をReplicantに入れる
	playerBtwitch_Rep.value = response[json_number].twitch;
	playerBtwitter_Rep.value = response[json_number].twitter;
	playerByoutube_Rep.value = response[json_number].youtube;
	playerBniconico_Rep.value = response[json_number].niconico;
	commB_Rep.value = response[json_number].comm;
}

// ボタン処理（ID読み込み）
document.getElementById('submitBtn').addEventListener('click', () =>{
	const screenB_id = document.getElementById('ScreenB_id').value;
	fetchJson(url, options, screenB_id);
})

// Dashboardの情報を最新のデータに更新する処理
gametitleB_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameTitleB").innerHTML = newVal;
})
gamecategoryB_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameCategoryB").innerHTML = newVal;
})
gameestimateB_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameEstimateB").innerHTML = newVal;
})
playerB_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameRunnerB").innerHTML = newVal;
})
commB_Rep.on('change',(newVal)=>{
	document.getElementById("playerB_Comm").innerHTML = newVal;
})
