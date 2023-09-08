import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';

import newscreen from '../screens/newscreen';
import homescreen from '../screens/homescreen';
import kategoriscreen from '../screens/kategoriscreen';
import watchscreen from '../screens/watchscreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                height: 60,
                ... styles.shadow
            }
        }}>
            <Tab.Screen name='i-berita' component={homescreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                        source={require('../source/assets/icons/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94',}}
                            />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                             Home
                             </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name='Berita Terkini' component={newscreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                        source={require('../source/assets/icons/newspaper-folded.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'}}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Berita Terkini</Text>
                    </View>
                )
            }}/>
            
            <Tab.Screen name='Kategori' component={kategoriscreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                        source={require('../source/assets/icons/category.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'}}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Kategori</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='Watch' component={watchscreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                        source={require('../source/assets/icons/play.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'}}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Watch </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;