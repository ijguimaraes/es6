class Message {
  constructor(text = '', create = Date.now()){
    this.text = text;
    this.create = create;
  }

  toString(){
    return `Message\'s toString`;
  }

}

var emptyMessage = new Message();
var textMessage = new Message('teste', Date.now() - 86400);
console.log(emptyMessage);
console.log(textMessage+'');