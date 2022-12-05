import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { View } from 'react-native';

const optionsPerPage = [2, 3, 4];

const MyComponent = (props) => {
  return (
    <View>
         <DataTable>
      <DataTable.Header style={{paddingLeft: 30}}>
        {props.tableData.columns?.map((column, index) => {
            return (
                <DataTable.Title style={{paddingLeft: 10}} key={index}>{column}</DataTable.Title>
            )
        })}
      </DataTable.Header>

        {props.tableData.data.map((row, index) => {
            return (
                <DataTable.Row style={{paddingLeft: 30}} key={index} >
                    {row.map((cell, index) => {
                        return (
                            <DataTable.Cell style={{paddingLeft: 10}} key={index}>{cell}</DataTable.Cell>
                        )
                    })}
                </DataTable.Row>)})
        }
    </DataTable>
    </View>
  );
}

export default MyComponent;