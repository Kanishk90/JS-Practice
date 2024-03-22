const obj = {
    color: 'red',
    changeColor: function(color){
        this.color = color
    }
}
obj.changeColor("Yellow");
console.log(obj.color)