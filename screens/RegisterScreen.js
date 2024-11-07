import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function RegisterScreen({ navigation }) {
  const { control, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Lógica de cadastro aqui
  };

  const formValues = watch();

  return (
    <View>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Ir para Login"
        onPress={() => navigation.replace('Login')}
      />

      {/* Exibe o estado atual do formulário */}
      <Text>Form Values: {JSON.stringify(formValues)}</Text>
    </View>
  );
}
