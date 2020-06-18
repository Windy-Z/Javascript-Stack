window.onload = function(){

	var stack = ["apple", "pear"];
	var stack_input = document.getElementById('stack-input');
	var stack_cont = document.getElementById('stack-cont');


	// 获取按钮
	var push_btn = document.getElementById('push-btn');
	var pop_btn = document.getElementById('pop-btn');
	var font_btn = document.getElementById('font-btn');
	var empty_btn = document.getElementById('empty-btn');

	// 入栈
	push_btn.onclick = function(){
		// 入栈
		stack.push(stack_input.value);
		// 更新栈内容
		stack_cont.innerHTML = '栈列内容：' + stack.join('-&gt;');
	}

	// 退栈
	pop_btn.onclick = function(){
		// 退栈
		stack.shift();
		// 更新栈内容
		stack_cont.innerHTML = '栈列内容：' + stack.join('&lt;-');
	}

	// 打印栈顶元素内容
	font_btn.onclick = function(){
		stack_cont.innerHTML = '栈顶元素：' + stack[0];
	}

	// 判断栈是否为空
	empty_btn.onclick = function(){
		if(stack[0] == null){
			alert('栈列为空');
		}else{
			alert('栈列不为空');
		}
	}


}
