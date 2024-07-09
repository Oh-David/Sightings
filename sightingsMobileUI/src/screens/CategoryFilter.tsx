import React, {useState} from "react"
import
    {
        View,
        Text,
        TouchableOpacity,
        Modal,
        ScrollView,
        StyleSheet,
    } from "react-native"
import {ProductCategory} from "./Data/ProductCategory"

interface CategoryFilterProps
{
    selectedCategory: ProductCategory | null
    onSelectCategory: (category: ProductCategory | null) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    selectedCategory,
    onSelectCategory,
}) =>
{
    const [modalVisible, setModalVisible] = useState(false)

    const getCategoryName = (category: ProductCategory): string =>
    {
        switch (category)
        {
            case ProductCategory.Electronics:
                return "Electronics"
            case ProductCategory.Furniture:
                return "Furniture"
            case ProductCategory.Clothing:
                return "Clothing"
            case ProductCategory.Books:
                return "Books"
            case ProductCategory.Toys:
                return "Toys"
            case ProductCategory.Tools:
                return "Tools"
            case ProductCategory.Appliances:
                return "Appliances"
            case ProductCategory.SportsEquipment:
                return "Sports Equipment"
            case ProductCategory.MusicalInstruments:
                return "Musical Instruments"
            case ProductCategory.Art:
                return "Art"
            case ProductCategory.Jewelry:
                return "Jewelry"
            case ProductCategory.Collectibles:
                return "Collectibles"
            case ProductCategory.Automotive:
                return "Automotive"
            case ProductCategory.Gardening:
                return "Gardening"
            case ProductCategory.OfficeSupplies:
                return "Office Supplies"
            case ProductCategory.PetSupplies:
                return "Pet Supplies"
            case ProductCategory.HealthAndBeauty:
                return "Health and Beauty"
            case ProductCategory.HomeDecor:
                return "Home Decor"
            case ProductCategory.OutdoorGear:
                return "Outdoor Gear"
            case ProductCategory.Other:
                return "Other"
            default:
                return "Unknown"
        }
    }

    const renderCategoryOption = (category: ProductCategory) => (
        <TouchableOpacity
            key={category}
            onPress={() =>
            {
                onSelectCategory(category)
                setModalVisible(false)
            }}
            style={styles.option}
        >
            <Text style={styles.optionText}>{getCategoryName(category)}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.dropdownButton}
            >
                <Text style={styles.dropdownButtonText}>
                    {selectedCategory === null ? "All Categories" : getCategoryName(selectedCategory)}
                </Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView>
                            <TouchableOpacity
                                onPress={() =>
                                {
                                    onSelectCategory(null)
                                    setModalVisible(false)
                                }}
                                style={styles.option}
                            >
                                <Text style={styles.optionText}>All Categories</Text>
                            </TouchableOpacity>
                            {Object.values(ProductCategory)
                                .filter(value => typeof value === 'number')
                                .map(value => renderCategoryOption(value as ProductCategory))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownButton: {
        padding: 12,
        backgroundColor: "#4CAF50",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    dropdownButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: "80%",
        maxHeight: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    optionText: {
        fontSize: 16,
        color: "#333",
    },
})

export default CategoryFilter