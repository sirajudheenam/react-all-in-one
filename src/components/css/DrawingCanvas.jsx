import React, { useRef, useEffect, useState } from 'react';
import styles from './drawingCanvas.module.css';
const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * .75;
        canvas.height = window.innerHeight * .75;
        console.log(canvas.width, canvas.height);
        canvas.style.width = `${window.innerWidth * .75}px`;
        canvas.style.height = `${window.innerHeight * .75}px`;
        // canvas.style.height = `${styles.height}`;
        // canvas.style.width = `${styles.width}`;

        const context = canvas.getContext('2d');
        // context.scale(2, 2);
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        console.log("offsetX: ", offsetX, "offsetY: ", offsetY);
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

    const calculateXYPosition = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        console.log("clicked at: ", offsetX, offsetY);
        console.log("offsetX: ", offsetX, "offsetY: ", offsetY);
    };
    return (
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            onClick={calculateXYPosition}
            ref={canvasRef}
            className={styles.drawingCanvas}
        />
    );
};

export default DrawingCanvas;
