function calculateRent() {
		var rent = Number(document.getElementById("rent").value);
		var Participants = Number(document.getElementById("participants").value);

		var result = rent / Participants;


document.getElementById("answerDiv").innerHTML = "Rent per participants is  "  + result.toFixed(2)+ " " + "euros.";
}
		 