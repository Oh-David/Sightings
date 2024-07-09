import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {RootState} from './Data/Store'
import {Product} from 'models/navigationTypes'

const BidScreen: React.FC = () =>
{
    const bids = useSelector((state: RootState) => state.bids.bids)
    const products = useSelector((state: RootState) => state.products.products)

    const findProductById = (id: string): Product | undefined =>
        products.find((product) => product.id === id)

    const renderItem = ({item}: {item: {product1Id: string; product2Id: string}}) =>
    {
        const product1 = findProductById(item.product1Id)
        const product2 = findProductById(item.product2Id)

        return (
            <View style={styles.bidItem}>
                {product1 && product2 && (
                    <>
                        <Text style={styles.productName}>{product1.name}</Text>
                        <Text style={styles.bidText}>is bid with</Text>
                        <Text style={styles.productName}>{product2.name}</Text>
                    </>
                )}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bids</Text>
            <FlatList
                data={bids}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    bidItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bidText: {
        fontSize: 16,
        marginHorizontal: 8,
    },
})

export default BidScreen