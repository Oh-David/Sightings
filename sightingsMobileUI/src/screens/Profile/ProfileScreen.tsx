// ProfileScreen.tsx

import React, {useEffect, useState} from 'react'
import
{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import
{
  ProfileScreenNavigationProp,
  RouteParams,
} from 'models/navigationTypes'
import useProfile from './useProfile'
import {mockProfileImage} from '../Mock' // Ensure this path is correct
import {buttonStyles} from '../ButtonStyles'
import MyProducts from '../MyProducts'
import {getUserById} from '../Data/Api/ApiService'

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp
  route: {params?: RouteParams}
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation, route}) =>
{
  const {handleLogout, handleProfileImage} = useProfile(navigation, route)
  const [userName, setUserName] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() =>
  {
    const fetchUser = async () =>
    {
      try
      {
        const user = await getUserById('user12')
        setUserName(user.name)
      } catch (error)
      {
        setError('Failed to fetch user data')
      } finally
      {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onLongPress={handleProfileImage}>
        <Image source={{uri: mockProfileImage}} style={styles.profileImage} />
      </TouchableOpacity>
      <Text style={styles.title}>
        Welcome{userName ? `, ${userName}` : ''}
      </Text>
    </View>
  )

  if (loading)
  {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error)
  {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}

      {/* Your Products Header */}
      <View style={styles.productsHeader}>
        <Text style={styles.productsTitle}>Your Products</Text>
      </View>

      {/* My Products Section */}
      <View style={styles.productsContainer}>
        <MyProducts />
      </View>

      {/* Logout Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={buttonStyles.button} onPress={handleLogout}>
          <Text style={buttonStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  productsHeader: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
  },
  productsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  productsContainer: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
})

export default ProfileScreen