import React, {useRef, useState} from 'react';

const EventExample = () => {
	const [text, setText] = useState<string>('')
	const [drop, setDrop] = useState<boolean>(false)
	
	const ref = useRef<HTMLInputElement>(null)
	
	function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value)
		
	}
	
	function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
		console.log(event)
		console.log(ref.current?.value)
	}
	
	function dragHandler(e: React.DragEvent<HTMLDivElement>) {
		console.log('DRAG')
	}
	
	function dropHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setDrop(false)
		console.log("DROP")
	}
	
	function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setDrop(false)
	}
	
	function overDropHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setDrop(true)
	}
	
	return (
		<div>
			<input type='text' onChange={changeHandler} value={text} placeholder='Управляемый'/>
			<input ref={ref} type='text' placeholder='Неуправляемый'/>
			<button onClick={clickHandler}>Click</button>
			<div
				draggable
				onDrag={dragHandler}
				style={{width: 100, height: 100, backgroundColor: "red"}}
			>
				draggable
			</div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={overDropHandler}
				style={{width: 100, height: 100, backgroundColor: drop ? "blue" : "red", marginTop: 10}}
			>
				not draggable
			</div>
		</div>
	);
};

export default EventExample;