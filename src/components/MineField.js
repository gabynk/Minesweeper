import React from 'react';
import { View, StyleSheet } from 'react-native';

import Field from './Field';

export default props => {
    const rows = props.board.map((row, indexRow) => {
        const columns = row.map((field, indexField) => {
    
            return <Field {...field} 
                key={indexField} 
                onOpen={() => props.onOpenField(indexRow, indexField)}  
                onSelect={() => props.onSelectField(indexRow, indexField)}  
            />
        });

        return <View key={indexRow} style={styles.containerColumns}>{columns}</View>
    });

    return <View style={styles.containerRows}>{rows}</View>
}

const styles = StyleSheet.create({
    containerColumns: {
        flexDirection: 'row',
    },

    containerRows: {
        backgroundColor: '#EEE'
    },
})