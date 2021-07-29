import React from 'react'
import { View, Text, Image } from 'react-native'

import { FONTS, COLORS } from '../constants'

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
    if (isTrade) {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.black
            }}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white,
                        ...iconStyle
                    }}
                />
                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{label}</Text>
            </View>
        )
    }
    else {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary,
                        ...iconStyle
                    }}
                />
                <Text style={{ color: focused ? COLORS.white : COLORS.secondary, ...FONTS.h4 }}>{label}</Text>
            </View>
        )
    }
}

export default TabIcon
