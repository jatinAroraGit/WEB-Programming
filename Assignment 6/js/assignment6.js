/**************************************** *
WEB222 ASSIGNMENT 6

NAME - JATIN ARORA
136897162
DATE - 08/10/2017

**********************************************/
// set a global httpRequest object

var httpRequest;
		
//request to page one when window loads


window.onload = function(){
	
makeRequest(1);

}



function makeRequest(pageNum) {
	if (pageNum == 1){
		var url = 'https://reqres.in/api/users?page=1';
			
	}else if (pageNum == 2){
		var url = 'https://reqres.in/api/users?page=2';
	
	}else if (pageNum == 3){
		var url = 'https://reqres.in/api/users?page=3';
	//httpRequest = new XMLHttpRequest();
	
	
}else if (pageNum == 4){
		var url = 'https://reqres.in/api/users?page=4';

}



	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			var display = document.querySelector('#data');
			display.innerHTML = '';

			for(var i = 0 ; i < jsData.data.length; i++){
				
				var row_ = document.createElement("tr");
				var c1 = document.createElement("td");
				var t1 = document.createTextNode(jsData.data[i].id);
				c1.appendChild(t1);
				row_.appendChild(c1);
				
				var c2 = document.createElement("td");
				var t2 = document.createTextNode(jsData.data[i].first_name);
				c2.appendChild(t2);
				row_.appendChild(c2);
			
			    var c3 = document.createElement("td");
				var t3 = document.createTextNode(jsData.data[i].last_name);
				c3.appendChild(t3);
				row_.appendChild(c3);
			
			    var c4 = document.createElement("td");
				var image = document.createElement("img");
				
				image.setAttribute("src",jsData.data[i].avatar);
				c4.appendChild(image);
				row_.appendChild(c4);
			
			    display.appendChild(row_);
			}
			//removing class active
			
			var rmvActive = document.querySelectorAll("pgbtn");
			
			for(var i = 0; i < rmvActive.length; i++){
				rmvActive[i].classList.remove("active");
			}
			
			
			
			
			
			
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			var addClass = document.querySelector("pgbtn");
			var len =addClass.length;
			for (var i=0;i<len;i++){
				addClass[i].classList.add("active");
			}
		
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	