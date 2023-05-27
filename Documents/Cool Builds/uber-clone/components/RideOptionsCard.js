import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data =[
    {
        id:"Uber-X-123",
        title:"NUberX",
        multiplier:1,
        image:"https://links.papareact.com/3pn",
    },
    {
        id:"Uber-XL-456",
        title: "NUber XL",
        multiplier:1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "NUber Black",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];


//surge pricing
const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-purple-200 flex-grow`}>
        <View>
            <TouchableOpacity 
            onPress= {() => navigation.navigate('NavigateCard')} 
            style={tw`absolute top-2 left-5 z-50 p-3 rounded-full`}
            >
                <Icon name = "chevron-left" type="fontawesome" />
            </TouchableOpacity>
            <Text style={tw`text-center py-4 text-xl`}>Choose your ride - {travelTimeInformation?.distance?.text}</Text>
        </View>
        <FlatList data={data}
        keyExtractor={(item) => item.id}
            renderItem={({item: { id, title, multiplier, image }, item}) => (
            <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
                id === selected?.id && "bg-purple-400"}`}
            >
                <Image 
                    style={{
                        width:100,
                        height:90,
                        resizeMode:"contain",
                    }}
                    source = {{ uri: image }}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>{travelTimeInformation?.duration?.text}</Text>
                </View>
            <Text style={tw`text-xl`}>
                    {new Intl.NumberFormat('en-gb', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(
                        (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier ) /100
                    )}

            </Text>
            </TouchableOpacity>
            )}
        />
        <View>
            <TouchableOpacity disabled ={!selected} style ={tw`bg-purple-700 py-3 m-2 rounded-full ${!selected && 'bg-gray-300'}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View> 
    </SafeAreaView>

  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});