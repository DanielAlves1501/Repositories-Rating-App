import React, { Children } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { theme } from '../theme'

const styles = StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily:theme.fonts.main,
        fontWeight:theme.fontWeights.normal
    },
    colorPrimary:{
        color:theme.colors.primary
    },
    colorSecondary:{
        color:theme.colors.textsecondary
    },
    bold:{
        fontWeight:theme.fontWeights.bold,
    },
    subheading:{
        fontSize:theme.fontSizes.subheading
    },

})

const StyledText = ({color,children,fontSize,fontWeight,style, ...restOfProps}) => {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'bold' && styles.subheading,
    fontWeight === 'bold' && styles.bold

  ]
  
    return (
    <Text style={textStyles} {...restOfProps}>
        {children}
    </Text>
  )
}

export default StyledText