import Sidebar from '@/components/Drawer';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Menu, Bell, ChevronRight, BellOff } from 'react-native-feather';

const hasPremium = false;
const LatentHome = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const renderEpisodeCard = (episode: {
        title: string;
        image: string;
        isLocked?: boolean;
    }) => (
        <TouchableOpacity style={styles.episodeCard}>
            <View style={styles.thumbnailContainer}>
                <Image
                    source={require("../../assets/thumbnail1.png")}
                    style={styles.thumbnail}
                />
                {episode.isLocked && (
                    <View style={styles.lockContainer}>
                        <Image source={require("assets/lock2.png")} style={[
                            {
                                tintColor: 'rgba(248, 212, 141, 1)',
                            },
                        ]} />
                    </View>
                )}
            </View>
            <Text style={styles.episodeTitle} numberOfLines={2}>
                {episode.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    setIsDrawerOpen(!isDrawerOpen)
                }}>
                    <Menu stroke="white" width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    router.push('/(onboarding)/Welcome')
                }}>
                    <Bell stroke="white" width={24} height={24} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {hasPremium ?
                    <TouchableOpacity style={styles.upgradeCard}>
                        <Image
                            source={require('../../assets/thumbnail1.png')}
                            style={styles.upgradeBackground}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.upgradeCard} onPress={() => {
                        router.push('/(root)/(tabs)/Premium')
                    }}>
                        <Image
                            source={require('../../assets/join-latent.png')}
                            style={styles.upgradeBackground}
                        />
                    </TouchableOpacity>}

                <View style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <Text style={styles.sectionTitlePremium}>Latent+ Episodes</Text>
                        <ChevronRight stroke="#FFFFFF" width={20} height={20} />
                    </TouchableOpacity>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.episodeList}>
                        {[
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: true,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: true,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: true,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: true,
                            },
                        ].map((episode, index) => (
                            <View key={index} style={styles.episodeCardContainer}>
                                {renderEpisodeCard(episode)}
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>All Episodes</Text>
                        <ChevronRight stroke="#FFFFFF" width={20} height={20} />
                    </TouchableOpacity>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.episodeList}>
                        {[
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: false,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: false,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: false,
                            },
                            {
                                title: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @...",
                                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20070320-r2fcVWd6Wz87be9EG68lmFWC1ALNRL.png",
                                isLocked: false,
                            },
                        ].map((episode, index) => (
                            <View key={index} style={styles.episodeCardContainer}>
                                {renderEpisodeCard(episode)}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            {isDrawerOpen && <Sidebar onPress={() => setIsDrawerOpen(!isDrawerOpen)}/>}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    content: {
        flex: 1,
    },
    upgradeCard: {
        margin: 16,
        height: 220,
        width: 353,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gold', // change this
        overflow: 'hidden',
    },
    upgradeBackground: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    upgradeContent: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upgradeText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    latentPlusText: {
        color: '#FFD700',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    upgradeDescription: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 16,
    },
    joinButton: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
    },
    joinButtonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '600',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    sectionTitlePremium: {
        color: '#F8D48D',
        fontSize: 20,
        fontWeight: '600',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    episodeList: {
        paddingLeft: 16,
    },
    episodeCardContainer: {
        marginRight: 12,
        fontSize: 12,
        width: 177.46,
        height: 142.26
    },
    episodeCard: {
        width: '100%',
        // paddingHorizontal: 16
    },
    thumbnailContainer: {
        position: 'relative',
        aspectRatio: 16 / 9,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 8,
        borderWidth: 1.1,
        borderColor: '#F8D48D'
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    lockContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'rgba(248, 212, 141, 1)',
        borderRadius: 12,
        padding: 4,
    },
    episodeNumberContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    episodeNumberText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'figtree'
    },
    episodeTitle: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 15,
    },
    allEpisodesList: {
        paddingHorizontal: 16,
    },
});

export default LatentHome;

