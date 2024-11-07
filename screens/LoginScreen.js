import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function LoginScreen({ navigation }) {
  const { control, handleSubmit, watch } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Lógica de autenticação aqui
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Ir para Cadastro" onPress={() => navigation.replace('Register')} />

      {/* Exibe o estado atual do formulário */}
      <Text>Form Values: {JSON.stringify(formValues)}</Text>
    </View>
  );
}
