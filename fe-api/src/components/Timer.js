import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const timervalue = props.duration
    const [seconds, setSeconds] = useState(timervalue); //why is this, what is this
    const [isActive, setIsActive] = useState(false);


    console.log('Timer for reals')
    console.log(props)

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(timervalue => timervalue - 1);
        }, 1000);
    }, [isActive, timervalue]);

    return (
        <div className="app">
            <div className="time">
                {seconds}s
            </div>
        </div >
    );
};

export default Timer;