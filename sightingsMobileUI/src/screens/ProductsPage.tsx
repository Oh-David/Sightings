import React, {useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native"
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
                    style={styles.viewButton}
                    onPress={() => setProductListModalVisible(true)}
                >
                    <Text style={styles.viewButtonText}>View Fullscreen</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Products</Text>
                <MyProducts />
                <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => setMyProductsModalVisible(true)}
                >
                    <Text style={styles.viewButtonText}>View Fullscreen</Text>
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
                        style={styles.closeButton}
                        onPress={() => setProductListModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
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
                        style={styles.closeButton}
                        onPress={() => setMyProductsModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    section: {
        flex: 1,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    viewButton: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    viewButtonText: {
        color: "#FFF",
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    closeButton: {
        backgroundColor: "#FF0000",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    closeButtonText: {
        color: "#FFF",
        fontSize: 16,
    },
})

export default ProductsPage