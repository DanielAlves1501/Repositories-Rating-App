import React from "react";
import { View,Text } from "react-native";
import Constants from 'expo-constants';
import ReposList from "./RepositoryList";

const Main = ()=>{
    return(
        <View style={{marginTop:Constants.statusBarHeight}}>
            <ReposList/>
        </View>
    )
}

export default Main