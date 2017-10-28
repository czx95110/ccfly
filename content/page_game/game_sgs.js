function Card(name,number,color,type) {
  this.name=name || 'sha';
  this.number=number || 1;
  this.color=color || 'hei';
  this.type=type || 1;
}
Card.prototype.setName= function (name) {
  this.name=name;
};
Card.prototype.getName= function () {
  return this.name;
};
Card.prototype.setColor= function (color) {
  this.color=color;
};
Card.prototype.getColor= function () {
  return this.color;
};

Card.prototype.setNumber= function (number) {
  this.number=number;
};
Card.prototype.getNumber= function () {
  return this.number;
};

Card.prototype.setType= function (type) {
  this.type=type;
};
Card.prototype.getType= function () {
  return this.type;
};

Card.prototype.init= function () {
  this.setColor('hei');
  this.setName('sha');
  this.setNumber('5');
  this.type=1;
};





