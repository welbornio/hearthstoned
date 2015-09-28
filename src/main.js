var server = {
	0: {
		user: {
			health: 30,
			mana: 1,
			name: 'Goldbear'
		},
		cards: [
			{
				id: 1,
				name: 'Varian Wrynn',
				description: 'Put any minions you drew directly into the battlefield.',
				type: 'Minion',
				class: 'Warrior',
				damage: 7,
				health: 7,
				url: 'http://media-hearth.cursecdn.com/avatars/252/414/22342.png'
			},
			{
				id: 2,
				name: 'Grommash Hellscream',
				description: 'Charge\nEnrage: +6 Attack',
				type: 'Minion',
				class: 'Warrior',
				damage: 4,
				health: 9,
				url: 'http://media-hearth.cursecdn.com/avatars/148/367/643.png'
			}
		]
	},

	1: {

	}
};

;(function() {

	var sindex = 0;
	function ajax() {
		// var xmlhttp = new XMLHttpRequest();
		// xmlhttp.onreadystatechange = function() {
		// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		// 		console.log('>>>>>>>>', xmlhttp.responseText)
		//    	}
		// }
		// xmlhttp.open("GET","ajax_info.txt",true);
		// xmlhttp.send();

		var data = server[sindex++];

		if(data.user) {
			user.setName(data.user.name);
			user.setHealth(data.user.health);
			user.setMana(data.user.mana);
		}

		if(data.cards) {
			user.setCards(data.cards);
		}
	}

	document.onreadystatechange = function() {
   		if (document.readyState == "complete") {
   			ajax();
   		}
 	}

	function card(cfg) {
		this.cfg = cfg;
	}

	function User() {
		this.name = null;
		this.health = null;
		this.mana = null;
		this.cards = null;
	}

	User.prototype.setName = function(name) {
		this.name = name;
		this.dom().$name.innerText = name;
	};

	User.prototype.setHealth = function(health) {
		this.health = health;
		this.dom().$health.innerText = health;
	};

	User.prototype.setMana = function(mana) {
		this.mana = mana;
		this.dom().$mana.innerText = mana;
	};

	User.prototype.setCards = function(cards) {
		var that = this;
		var elem, img;
		this.cards = cards;

		this.cards.forEach(function(card) {
			elem = document.getElementById('user-card-' + card.id);

			if(!elem) {
				elem = document.createElement('div');
				img = document.createElement('img');
				elem.id = 'user-card-' + card.id;
				elem.className = 'card';
				img.src = card.url;
				elem.appendChild(img);
				that.dom().$cards.appendChild(elem);
			}
		});
	};

	;(function() {
		var dom = {
			$name: document.getElementById('user-name'),
			$health: document.getElementById('user-health'),
			$mana: document.getElementById('user-mana'),
			$cards: document.getElementById('user-cards')
		};

		User.prototype.dom = function() {
			return dom;
		};
	})();

	var user = new User();
})();