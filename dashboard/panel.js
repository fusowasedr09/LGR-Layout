//NodeCG:Replicantの宣言
const layout_voice_appear_Rep = nodecg.Replicant("layout_voice_appear");

// ボタン処理（ID読み込み）
document.getElementById('submitBtn1').addEventListener('click', () =>{
	layout_voice_appear_Rep.value = 1;
	console.log(layout_voice_appear_Rep);
})

document.getElementById('submitBtn2').addEventListener('click', () =>{
	layout_voice_appear_Rep.value = Number(2);
	console.log(layout_voice_appear_Rep);
})

document.getElementById('submitBtn3').addEventListener('click', () =>{
	layout_voice_appear_Rep.value = Number(3);
	console.log(layout_voice_appear_Rep);
})

document.getElementById('submitBtn4').addEventListener('click', () =>{
	layout_voice_appear_Rep.value = Number(4);
	console.log(layout_voice_appear_Rep);
})

document.getElementById('submitBtn5').addEventListener('click', () =>{
	layout_voice_appear_Rep.value = Number(5);
	console.log(layout_voice_appear_Rep);
})


