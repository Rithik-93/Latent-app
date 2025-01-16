// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

// interface ButtonProps {
//     children: React.ReactNode;
//     onPress?: () => void;
//     style?: StyleProp<ViewStyle>;
//     textStyle?: StyleProp<TextStyle>;
//     isActive?: boolean;
// }

// export default function Button({
//     children,
//     onPress,
//     style,
//     textStyle,
//     isActive = true
// }: ButtonProps) {
//     return (
//         <TouchableOpacity
//             style={[
//                 styles.button,
//                 isActive ? styles.buttonActive : styles.buttonInactive,
//                 style,
//             ]}
//             onPress={onPress}
//             disabled={!isActive}
//         >
//             <Text style={[styles.buttonText, textStyle]}>{children}</Text>
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: '#FFFFFF',
//         padding: 13,
//         borderRadius: 8,
//         marginTop: 32,
//         // position: 'absolute',
//         bottom: 40,
//         left: 20,
//         right: 20,
//     },
//     buttonActive: {
//         opacity: 1,
//     },
//     buttonInactive: {
//         opacity: 0.5,
//     },
//     buttonText: {
//         color: '#000000',
//         textAlign: 'center',
//         fontSize: 16,
//         fontWeight: '600',
//     },
// });
