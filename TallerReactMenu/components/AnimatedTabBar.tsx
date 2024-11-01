// components/AnimatedTabBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const AnimatedTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#fff' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Valor compartido para la escala de animación
        const scale = useSharedValue(1);

        // Efecto de escala al estar enfocado
        if (isFocused) {
          scale.value = withTiming(1.2, { duration: 300 });
        } else {
          scale.value = withTiming(1, { duration: 300 });
        }

        // Estilo animado para la escala
        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [{ scale: scale.value }],
          };
        });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.name} onPress={onPress}>
            <Animated.View style={[animatedStyle, { alignItems: 'center' }]}>
              <Text style={{ color: isFocused ? '#8B0000' : '#222' }}>
                {options.tabBarShowLabel || route.name}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AnimatedTabBar;
