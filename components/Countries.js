import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);

    const [searched,setSearched]=useState([]);

    const handleSearch=text=>{
        const filtered=countries.filter(country=>country.name.common.includes(text));
        setSearched(filtered);
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setSearched(data);
            })
    }, []);
    return (
        <View>
            <Text style={styles.title}>Visiting Countries:{searched.length}</Text>
            <TextInput style={styles.input}
            onChangeText={handleSearch}
            placeholder="Type Here"
            ></TextInput>
            <ScrollView>
                {
                    searched.map((country, index) => <Country key={country.index} country={country}></Country>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        marginTop: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});