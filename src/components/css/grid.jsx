import React from 'react';
import styles from './grid.module.css';
function Grid() {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.heading}>Div grid Demonstration</h1>

            <div className={styles.boxOne}>
                <p className={styles.para}>BoxOne</p>
            </div>
            <br />
            <div className={styles.boxTwo}>
            <p className={styles.para}>BoxTwo</p>
            </div>

            <br />
            <div className={styles.topContainer}>
                <div className={[styles.cell, styles.special].join(' ')}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
            </div>
            <br />
            <div className={styles.bottomContainer}>
                <div className={[styles.cellTwo , styles.top].join(' ')}>1</div>
                <div className={[styles.cellTwo , styles.middle-1].join(' ')}>2</div>
                <div className={[styles.cellTwo , styles.middle-2].join(' ')}>3</div>
                <div className={[styles.cellTwo , styles.bottom].join(' ')}>4</div>
            </div>
        </div>
    );
}

export default Grid;
