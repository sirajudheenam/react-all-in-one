import { useEffect, useState } from 'react';
import styles from './canvas.module.css';
function Canvas() {
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);


    // useEffect(() => {

    //     // ctx.clearRect(0, 0, c.width, c.height);
    //     // ctx.beginPath();
    //     // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //     // ctx.stroke();
    // }, []);

    const handleClick = (e) => {
        if (startX === 0 && startY === 0) {
            setStartX(e.clientX);
            setStartY(e.clientY);
        } else {
            setEndX(e.clientX);
            setEndY(e.clientY);
            // setStartX(0);
            // setStartY(0);

        }
        // if (endX === 0 && endY === 0) {
        //     setEndX(e.clientX);
        //     setEndY(e.clientY);
        // } else {
        //     // setEndX(0);
        //     // setEndY(0);
        //     setStartX(e.clientX);
        //     setStartY(e.clientY);
        // }
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        // ctx.moveTo(20, 40);
        // ctx.lineTo(endX, endY);
        ctx.stroke();
    };


    useEffect(() => {
        console.log(" startX: ", startX, " startY: ", startY, " endX: ", endX, " endY: ", endY);



    }, [startX, startY, endX, endY]);

    return (
        <div>
            <canvas id="myCanvas" className={styles.myCanvas} onClick={handleClick} >
            </canvas>
        </div>
    );
}

export default Canvas;

