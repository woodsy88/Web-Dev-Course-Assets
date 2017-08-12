

function Entry(title, content, author){
		this.title = title;
		this.content = content;
		this.author = author;
};


function Journal(){
	this.journalLog = [];
	this.currentEntryIndex = 0;
};



Journal.prototype.addEntry = function(entry){

		this.journalLog.push(entry);


};








//=========Additional Features

//Open current journal entry

Journal.prototype.openEntry = function(){

			var currentJournalEntry = this.journalLog[this.currentEntryIndex];
			currentJournalEntry.openEntry();
};

Journal.prototype.closeEntry = function(){
			
			var currentJournalEntry = this.journalLog[this.currentEntryIndex];
			currentJournalEntry.closeEntry();

};