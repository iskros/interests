function addEl(selector, event, callback) {	
	
	var items = document.querySelectorAll(selector);
	
	for(var i=0; i<items.length; ++i)
		items[i][event] = callback;

};

/*	
addEl('.my .interests .el', 'onclick', function(){	
	this.remove();			
	//this.parentNode.removeChild(this);
});*/

addEl('.friend .interests .el', 'onclick', function(){
	
	var value = this.innerHTML,
		div = this.cloneNode(true);				

	
	var els = document.querySelectorAll('.my .interests .el');

	for (var i = 0; i < els.length; i++) {		

		if (els[i].textContent === value) {
			document.querySelector('.error-message').style.color = '#f00';
			setTimeout("document.querySelector('.error-message').style.color = '#fff'", 1000)
			return;
		}
	};


	document.querySelector('.my .interests').appendChild(div);		
	
});


document.querySelector('.my .interests').onclick = function(e) {	

    var target = e && e.target || event.srcElement;      

    var href = target.innerHTML;
    //console.log(target);

    if (target.getAttribute('class') !== 'interests')
    	target.parentNode.removeChild(target);

    return false // 
};

document.querySelector('.add').onclick = function  () {
	

	var text = document.querySelector('.new input').value;
	document.querySelector('.new input').value = "";

	var div = document.querySelector('.el').cloneNode(true)
		els = document.querySelectorAll('.my .interests .el');

	for (var i = 0; i < els.length; i++) {		

		if (els[i].textContent === text) {
			document.querySelector('.error-message').style.color = '#f00';
			setTimeout("document.querySelector('.error-message').style.color = '#fff'", 1000)
			return;
		}
	};

	div.textContent = text;
	document.querySelector('.my .interests').appendChild(div);		
	
};
