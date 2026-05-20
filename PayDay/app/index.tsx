import { Text, View, Button, StyleSheet} from "react-native";
import { Link } from "expo-router"
import { Stack } from "expo-router";
import { Home } from "expo-router"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>PAY DAY</Text>
      <Button
  onPress={() => null}
  title="LOGIN"
  color="#841584"
  accessibilityLabel="Login com Google ou com E-Mail"
    >
    </Button>
    <Button 
  onPress={() => null}
  title="INICIAR"
  color="#841584"
  accessibilityLabel="Entrar no app se já estiver logado"
  >
   </Button>
   <Button
  onPress={() => null}
  title="PAGAR"
  color="#841584"
  accessibilityLabel="Efetuar pagamento com cartão ou pix"
  >
  </Button>,
  <Button
  onPress={() => null}
  title="IMPRIMIR BOLETO"
  color="#841584"
  accessibilityLabel="Imprimir boleto de comprovante de pagamento"
  >
  </Button>
  <Button
  onPress={() => null}
  title="ENVIAR COMPROVANTE"
  color="#841584"
  accessibilityLabel="Enviar comprovante de pagamento por whatsapp"
  >
  </Button>
<Button
  onPress={() => null}
  title="SAIR"
  color="#841584"
  accessibilityLabel="Sair de aplicativo"
/>

    </View>
  );
}



