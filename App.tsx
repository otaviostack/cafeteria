import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';



export default function App() {
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding"
    keyboardVerticalOffset= {30}>
      
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>

          <View>
            <Text style={styles.headerTitle}>Café do código</Text>
            <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
          </View>

          <View style={styles.avatarPlaceholder}>
            <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
          </View>
        </View>


        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Bom dia!</Text>
            <Text style={styles.grettingSubtitle}>Que tal um café hoje?</Text>
          </View>

          <View style={styles.featured}>
            <Image style={styles.image} source={require('./assets/coffee.jpg')}></Image>
            <Text style={styles.featuredTitle}>Cappucino Especial</Text>
            <Text style={styles.featuredDescription}>Cremoso e delicioso</Text>
            <Text style={styles.featuredPrice}>R$ 12,90</Text>
          </View>


          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>


          <View style={styles.menu}>
            <View style={styles.miniFeatured}>
              <Text style={styles.CardTitle}>Espresso</Text>
              <Text style={styles.CardDescription}>Puro e forte</Text>
              <Text style={styles.CardPrice}>R$ 7,00</Text>
            </View>

            <View style={styles.miniFeatured}>
              <Text style={styles.CardTitle}>Cappuccino</Text>
              <Text style={styles.CardDescription}>Clássico com espuma</Text>
              <Text style={styles.CardPrice}>R$ 12,90</Text>
            </View>

            <View style={styles.miniFeatured}>
              <Text style={styles.CardTitle}>Latte</Text>
              <Text style={styles.CardDescription}>Leite cremoso</Text>
              <Text style={styles.CardPrice}>R$ 11,50</Text>
            </View>

            <View style={styles.miniFeatured}>
              <Text style={styles.CardTitle}>Mocha</Text>
              <Text style={styles.CardDescription}>Toque de chocolate</Text>
              <Text style={styles.CardPrice}>R$ 13,50</Text>
            </View>
          </View>
        </View>


        <View style={styles.orderSection}>
          <Text style={styles.question}> Qual o seu nome ?</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu Nome">
          </TextInput>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fazer meu pedido</Text>
          </TouchableOpacity>

          <Pressable>

          </Pressable>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },

  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  content: {
    paddingHorizontal: 24
  },

  grettingSection: {
    marginTop: 10,
    marginBottom: 24
  },

  grettingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  grettingSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 8
  },

  featured: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16
  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },

  featuredDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  miniFeatured: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    width: "48%",
    marginBottom: 16,
  },

  CardTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  CardDescription: {
    fontSize: 12,
    marginTop: 4
  },

  CardPrice: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    color: "#c67c4e"
  },

  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32
  },
  orderSection: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },
  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#c67c4e",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#c67c4e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4

  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",

  }


});