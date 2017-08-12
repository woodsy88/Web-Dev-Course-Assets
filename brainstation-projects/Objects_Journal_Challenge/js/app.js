
//============ Object Constructors 
function Entry(title, content, author){
		this.title = title;
		this.content = content;
		this.author = author;
};


// Constructor for the Journal

function Journal(){
	this.journalLog = [];
	this.currentEntryIndex = 0;
};


//==============Adding Entries 





// Methods to add entries into the Journal Log Array
Journal.prototype.addEntry = function(entry){

		this.journalLog.push(entry);


};


//Object to stores entries in 
var journal = new Journal();


// New entires created from the Entry Object
var entry1 = new Entry("My First Entry", "this is my first entry into my journal","Andrew Woods");
var entry2 = new Entry("My Second Entry", "this is my second entry into my journal","Andrew Woods");
var entry3 = new Entry("Heating up", "Things are heating up", "Andrew Woods");
var entry4 = new Entry("Cooling Down", "Things are cooling down", "Andrew Woods");


journal.addEntry(entry1);
journal.addEntry(entry2);
journal.addEntry(entry3);
journal.addEntry(entry4);





//=================HTML RENDERED ON PAGE=========================


Entry.prototype.toHTML = function(){

var htmlString = '<li';
  
  if(this.currentEntryIndex){
  htmlString += ' class="current"';
  };

  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.content;
  htmlString += '<span class="duration">';
  htmlString += this.author;
  htmlString += '</span></li>';
  return htmlString;

};

Journal.prototype.renderInElement = function(list) {


		list.innerHTML = "";

		for (var i = 0; i < this.journalLog.length; i++){

			list.innerHTML += this.journalLog[i].toHTML();
		}

}


//puts html on the page

var playlistElement = document.getElementById("playlist");


//Calling the renderInElement on the journal object and putting html on the page
journal.renderInElement(playlistElement);



//==============================================================

if(this.currentEntryIndex === this.journalLog) {
		this.currentEntryIndex = 0;
};



			











