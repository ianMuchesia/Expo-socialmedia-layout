import React from 'react';
import { Slot } from 'expo-router';

const AppLayout = () => {

  

    return <Slot   screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#000000' },
      }} />
}

export default AppLayout