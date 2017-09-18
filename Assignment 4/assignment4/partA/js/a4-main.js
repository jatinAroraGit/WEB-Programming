/************************************************* *
WEB ASSIGNMENT 4 
JATIN ARORA (136897162)
***************************************************/
var filterAgeMax = Number.MAX_VALUE; 

var filterAgeMin = 0; 
var filterType = ""
window.onload=function(){
    filterAllPets();
}
function loadTableWithFilters(){
     var contain = document.querySelector("#main-table-body");
      contain.innerHTML="";
      var i;
      for(i=0;i<petData.length;i++)
      {
        
          if((filterType == "dog" && petData[i].type=="dog" )||( filterType == "cat" && petData[i].type=="cat") || (filterType == "bird" && petData[i].type=="bird")||(filterType == ""))
          {
              if(petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax &&filterType=="")
              {
                var row_ = document.createElement('tr');
                var col_ = document.createElement('td');
                var media_ = document.createElement('img');
                media_.setAttribute("src", petData[i].image.src);
                media_.setAttribute("width",petData[i].image.width);
                media_.setAttribute("height",petData[i].image.height);
                media_.setAttribute("alt",petData[i].image.alt);
                col_.appendChild(media_);
                row_.appendChild(col_);
                var col2 = document.createElement('td');
                row_.appendChild(col2);
                var head = document.createElement('h3');
                col2.appendChild(head);
                var name_ = document.createTextNode(""+petData[i].name+"");
                head.appendChild(name_);
                var p_ = document.createElement('p');
                var div = document.createElement('span');
                p_.innerHTML = petData[i].description;
                col2.appendChild(p_);
                var age_ = document.createTextNode("Age: " + petData[i].age + " year old.");
                div.appendChild(age_);
                col2.appendChild(div);
                contain.appendChild(row_);
              }
             else if(petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax &&filterType==petData[i].type){
               var row_ = document.createElement('tr');
                var col_ = document.createElement('td');
                var media_ = document.createElement('img');
                media_.setAttribute("src", petData[i].image.src);
                media_.setAttribute("width",petData[i].image.width);
                media_.setAttribute("height",petData[i].image.height);
                media_.setAttribute("alt",petData[i].image.alt);
                col_.appendChild(media_);
                row_.appendChild(col_);
                var col2 = document.createElement('td');
                row_.appendChild(col2);
                var head = document.createElement('h5');
                col2.appendChild(head);
                var name_ = document.createTextNode(""+petData[i].name+"");
                head.appendChild(name_);
                var p_ = document.createElement('p');
                var div = document.createElement('span');
                p_.innerHTML = petData[i].description;
                col2.appendChild(p_);
                var age_ = document.createTextNode("Age: " + petData[i].age + " year old.");
                div.appendChild(age_);
                col2.appendChild(div);
                contain.appendChild(row_);
                 
          }
          
    }
}
}
function filterAllPets(){
    filterType="";

    loadTableWithFilters();
}

function filterDogs(){
    filterType = "dog";

    loadTableWithFilters();
}

function filterBird(){
    filterType = "bird";

    loadTableWithFilters();
}

function filterCat(){
    filterType = "cat";
 
    loadTableWithFilters();
}
function filter_zero_1(){
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}
function filter_1_3(){
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}
function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

