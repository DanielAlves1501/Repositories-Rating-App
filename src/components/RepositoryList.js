import React from "react";
import { View,Text,FlatList} from "react-native";
import repositories from '../data/repositories.js'
import RepositoryItem from "./RepositoryItem.js";

const ReposList = ()=>{
    return (
        <FlatList data={repositories}
        ItemSeparatorComponent={()=> <Text></Text>} renderItem={({item:repo})=> (
            <RepositoryItem {...repo}/>
        )}>

        </FlatList>
    )
}

export default ReposList