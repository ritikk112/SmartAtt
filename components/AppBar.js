import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ navigationRef }) => (
    <Appbar.Header>
        <Appbar.Content title="Smart Attendance Sys" />
        <Appbar.Action icon="line-scan" onPress={() => { navigationRef.current?.navigate('QrScanner') }} />
    </Appbar.Header>
);

export default AppBar;