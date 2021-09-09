/* eslint-disable prettier/prettier */

import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#eceff1',
        // backgroundColor: '#febf5e',
        
        margin:20,
        padding:10,


    },
    inner_container:{
        padding:5,
    },
    title: {
        fontWeight:'bold',
        fontSize:18,
        marginTop:5,
        marginBottom:5,
    },
    price:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },

    image:{
        width:Dimensions.get('window').width / 3,
        height:Dimensions.get('window').width / 3,
        borderRadius:10,
    },
    stock:{
        color:'red',
        fontSize:16,
        fontWeight:'bold',
    }
});
