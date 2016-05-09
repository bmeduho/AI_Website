var Home_Summary_img_Locations = ["Images/Home_Summary_img_1.png", "Images/Home_Summary_img_2.png", "Images/Home_Summary_img_3.png"];
var Home_Summary_Description_Words = ["...","uhh?","I don't know what to put yet."]
var Home_Summary_Count = 0;

function SetHomeSummary () {
	var Home_Summary_img = document.getElementById('Home_Summary_img');
	var Home_Summary_Description = document.getElementById('Home_Summary_Description');
	
	Home_Summary_img.src = Home_Summary_img_Locations[Home_Summary_Count];
	Home_Summary_Description.innerHTML = Home_Summary_Description_Words[Home_Summary_Count];
}

function ChangeHomeSummary (direction) {
	console.log("ChangeHomeSummary has run.");
	var Home_Summary_img = document.getElementById('Home_Summary_img');
	var Home_Summary_Description = document.getElementById('Home_Summary_Description');
	
	switch (direction) {
		case "increment":
			Home_Summary_Count++;
			break;
		case "decrement":
			Home_Summary_Count--;
			break;
	}
	if (Home_Summary_Count >= Home_Summary_img_Locations.length || Home_Summary_Count >= Home_Summary_Description_Words) {
		Home_Summary_Count = 0;
	} else if (Home_Summary_Count < 0) {
		Home_Summary_Count = 2;
	}
	
	Home_Summary_img.src = Home_Summary_img_Locations[Home_Summary_Count];
	Home_Summary_Description.innerHTML = Home_Summary_Description_Words[Home_Summary_Count];
}

window.addEventListener('load', SetHomeSummary (), false);
