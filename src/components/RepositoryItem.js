import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import StyledText from './StyledText'


const RepositoryStats = (props)=>{
  return (
    <View style={{flexDirection:'row',justifyContent:"space-around"}}>
      <View>
        <StyledText>Stars: </StyledText>
        <StyledText>{props.stargazersCount}</StyledText>
      </View>
      
      <View>
        <StyledText>Forks: </StyledText>
        <StyledText>{props.reviewCount}</StyledText>
      </View>

      <View>
        <StyledText>Review: </StyledText>
        <StyledText>{props.forksCount}</StyledText>
      </View>

      <View>
        <StyledText>Rating: </StyledText>
        <StyledText>{props.ratingAverage}</StyledText>
      </View>

    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
    <StyledText >Description: {props.description}</StyledText>
    <StyledText >Language: {props.language}</StyledText>
    <RepositoryStats {...props}/>
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        color:'#09f',
        fontWeight:'bold',
        marginBottom:5
    }
})
export default RepositoryItem