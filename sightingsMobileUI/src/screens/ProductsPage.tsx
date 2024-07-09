import React, {useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native"
import {buttonStyles} from "./ButtonStyles" // Import the button styles
import ProductList from "./ProductList"
import MyProducts from "./MyProducts"

const ProductsPage: React.FC = () =>
{
    const [isProductListModalVisible, setProductListModalVisible] = useState(false)
    const [isMyProductsModalVisible, setMyProductsModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Product List</Text>
                <ProductList />
                <TouchableOpacity
                    style={[buttonStyles.button]}
                    onPress={() => setProductListModalVisible(true)}
                >
                    <Text style={[buttonStyles.buttonText,]}>View Fullscreen</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Products</Text>
                <MyProducts />
                <TouchableOpacity
                    style={[buttonStyles.button,]}
                    onPress={() => setMyProductsModalVisible(true)}
                >
                    <Text style={[buttonStyles.buttonText]}>View Fullscreen</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={isProductListModalVisible}
                animationType="slide"
                onRequestClose={() => setProductListModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <ProductList />
                    <TouchableOpacity
                        style={[buttonStyles.button, buttonStyles.redButton]}
                        onPress={() => setProductListModalVisible(false)}
                    >
                        <Text style={[buttonStyles.buttonText, buttonStyles.redButtonText]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                visible={isMyProductsModalVisible}
                animationType="slide"
                onRequestClose={() => setMyProductsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <MyProducts />
                    <TouchableOpacity
                        style={[buttonStyles.button, buttonStyles.redButton]}
                        onPress={() => setMyProductsModalVisible(false)}
                    >
                        <Text style={[buttonStyles.buttonText, buttonStyles.redButtonText]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#F5F5F5",
    },
    section: {
        flex: 1,
        marginBottom: 20,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#333333",
        marginBottom: 15,
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
})

export default ProductsPage