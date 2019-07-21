Object.defineProperty(obj,"txt",{
  get:function(){
    return obj
  },
  set:function(newValue){
    this.value = value
  }
})

let obj = new Proxy({},{
  get:function(target,key,receiver){
    console.log(`gettting ${key}!`);
    return Reflect.get(target,key,receiver);
  },
  set:function(target,key,value,receiver){
    console.log(`setting ${key}!`);
    return Reflect.set(target,key,value,receiver);
  }
})
