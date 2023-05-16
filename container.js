<FlatList
  data={data}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      {/* Adicione mais elementos e estilos para exibir outras informações da raça */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.showImage(item)}
      >
        <Text style={styles.buttonText}>Ver imagem</Text>
      </TouchableOpacity>
    </View>
  )}
  keyExtractor={(item) => item.id.toString()}
  style={styles.listContainer}
/>

{this.state.selectedImageUrl && (
  <Image source={{ uri: this.state.selectedImageUrl }} style={styles.selectedImage} />
)}
