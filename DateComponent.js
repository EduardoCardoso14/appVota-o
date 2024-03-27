import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
//import styles from "../styles/global";
import moment from 'moment';
 
const DateComponent = () => {
    const [currentDate, setCurrentDate] = useState(moment());
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment());
        }, 1000);
 
        return () => clearInterval(interval);
    }, []);
 
    return (
        <View>
            <Text>{currentDate.format('DD/MM/YYYY')}</Text>
        </View>
    );
};
 
export default DateComponent;