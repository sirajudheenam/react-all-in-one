import React, { useRef, useEffect, useState } from 'react';
import styles from './drawingCanvas.module.css';
const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const colorRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [context, setContext] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        // const canvas = canvasRef.current;
        setCanvas(canvasRef.current);
        if (canvas !== null) {
            canvas.width = window.innerWidth * .75;
            canvas.height = window.innerHeight * .75;
            canvas.style.width = `${window.innerWidth * .75}px`;
            canvas.style.height = `${window.innerHeight * .75}px`;
            // const context = canvas.getContext('2d');
            setContext(canvas.getContext('2d'));
        }
        if (context !== null) {
            // context.scale(2, 2);
            context.lineCap = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 5;
            contextRef.current = context;
        }

    }, [canvas, context]);

    const clearDrawing = () => {
        // https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
        // contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        contextRef.current.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.beginPath();
    };

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const handleColorChange = () => {
        contextRef.current.strokeStyle = colorRef.current.value;
    };

    return (

        <div>
            <div className={styles.tools}>
                Tools
                <input type="color" ref={colorRef} name="color" onChange={handleColorChange} />
                <button onClick={clearDrawing}>Clear</button>
            </div>
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                className={styles.drawingCanvas}
            />
        </div>
    );
};

export default DrawingCanvas;
