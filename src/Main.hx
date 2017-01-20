package;

import js.Browser;
import js.html.HTMLDocument;

class Main {
	
	function addText( content:String ):Void {
		var p = doc.createParagraphElement();
		p.innerHTML = content;
		doc.body.appendChild( p );
	}
	
	var doc:HTMLDocument;
    
	static function main() {
		new Main();
	}

	public function new() {

		doc = Browser.document;
		addText( 'Hello Gulper!' );
		
	}
}
