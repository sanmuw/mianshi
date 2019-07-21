/*
* @Author: sanmuw
* @Date:   2019-07-21 13:13:00
* @Last Modified by:   sanmu
* @Last Modified time: 2019-07-21 13:48:21
*/
const PENDING = 'pending'; //初始状态
const FULFILLED = 'fulfilled'; // 成功状态
const REJECTED = 'rejected'; // 失败
function Promise(extutor){
	let self = this;
	self.status = PENDING; //设置状态
	//存放成功的回调的函数
	self.onResolveCallbacks = [];
	//存放失败的回调的函数
	self.onRejectedCallbacks = [];
	function resolve(value){
		if (self.status === PENDING) {
			self.status = FULFILLED;
			self.value = value;
			self.onResolveCallbacks.forEach(cb => cb(self.value))
		}
	}
	function reject(reason){
		if (self.status === PENDING) {
			self.status = REJECTED;
			self.value = reason;
			self.onRejectedCallbacks.forEach(cb => cb(self.value))
		}
	}
	try{
		extutor(resolve,reject)
	}catch(e){
		reject(e)
	}
}

Promise.prototype.then = function(onFulfilled,onRejected){
	//如果成功和失败的回调没有传，表示这个then没有任何逻辑，只负责把值往后抛
	onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : value => value
	onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason }
	let self = this;
	let promise2;
	//实现链式调用，每一种状态都要返回的是一个promise实例
	if (self.status == FULFILLED) {
		//如果promise状态已经是成功态，onFulfilled直接取值
		return promise2 = new Promise(function(resolve,reject){
			setTimeout(function(){
				try{
					onFulfilled(self.value)
				}catch(e){
					//如果执行成功的回调过程中出错，用错误原因把promise2 reject
					reject(e)
				}
			})
		})
	}
	if (self.status == REJECTED) {
		return promise2 ==new Promise(function(){
			setTimeout(function(){
				try{
					onFulfilled(self.value)
				}catch(e){
				 reject(e)	
				}
			})
		})
	}
	if (self.status === PENDING) {
		return promise2 = new Promise(function(resolve,reject){
			 // pending 状态时就会把所有的回调函数都添加到实例中的两个堆栈中暂存，等状态改变后依次执行，其实这个过程就是观察者模式
			 self.onResolveCallbacks.push(function(){
			 	setTimeout(function(){
			 		try{
			 			onFulfilled(self.value)
			 		}catch(e){
			 			reject(e)
			 		}
			 	})
			 })
		})
		self.onRejectedCallbacks.push(function(){
			setTimeout(function(){
				try{
					onRejected(self.value)
				}catch(e){
					reject(e)
				}
			})
		})
	}
}
