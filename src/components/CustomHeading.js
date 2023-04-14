import { useContext } from 'react'
import { FontContext } from '../context/FontContext'
import { Text, StyleSheet } from 'react-native';

export default function CustomHeading(props) {
    const {fontsLoaded} = useContext(FontContext);
    return (
        <>
            {fontsLoaded &&
                <Text style={[styles.headingText, {fontFamily: "Roboto-Bold"}]}>{props.title}</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    headingText: {
        color: "#313333",
        fontSize: 20,
        marginTop: 50,
        marginHorizontal: 15
    },
})
