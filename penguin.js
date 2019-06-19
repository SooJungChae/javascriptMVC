// Controller
function PenguinController (penguinView, penguinModel) {
	this.penguinView = penguinView;
	this.penguinModel = penguinModel;

	penguinView.render(penguinModel);

	this.penguinView.increaseButton.addEventListener('click', this.increasePenguin.bind(this));
	this.penguinView.decreaseButton.addEventListener('click', this.decreasePenguin.bind(this));
}

PenguinController.prototype = {
	increasePenguin: function () {
		this.penguinModel.increasePenguin();
		this.penguinView.render(this.penguinModel);
	},
	decreasePenguin: function () {
		this.penguinModel.decreasePenguin();
		this.penguinView.render(this.penguinModel);
	}
};

// Model
function PenguinModel() {
	this.penguinsCount = 1;
}

PenguinModel.prototype = {
	penguinsCount: function () {
		return this.penguinsCount;
	},
	increasePenguin: function () {
		this.penguinsCount += 1;
	},
	decreasePenguin: function () {
		this.penguinsCount -= 1;
	}
};

// View
function PenguinView (d) {
	this.penguinsArea = d.getElementById('penguins');
	this.increaseButton = d.getElementById('btn-increase');
	this.decreaseButton = d.getElementById('btn-decrease');
}

PenguinView.prototype = {
	render: function (penguinModel) {
		const penguinsCount = penguinModel.penguinsCount;
		this.penguinsArea.innerHTML = "";
		for (let i = 1; i <= penguinsCount; i++) {
			this.penguinsArea.innerHTML += `<div class="penguin"></div>`;
		}
	}
};

const penguinView = new PenguinView(document);
const penguinModel = new PenguinModel();

window.addEventListener('load', function () {
	'use strict';

	new PenguinController(penguinView, penguinModel);
});