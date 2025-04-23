import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession(); // Required for web

export const loginWithGoogle = async () => {
    try {
        const [request, response, promptAsync] = Google.useAuthRequest({
            expoClientId: 'YOUR_EXPO_CLIENT_ID', // Replace with your actual ID
            iosClientId: 'YOUR_IOS_CLIENT_ID',   // (Optional)
            androidClientId: 'YOUR_ANDROID_CLIENT_ID', // (Optional)
            webClientId: 'YOUR_WEB_CLIENT_ID',   // (Optional)
        });

        const result = await promptAsync();
        if (result?.type === 'success') {
            return result.authentication; // Returns access token
        }
        return null;
    } catch (err) {
        throw err;
    }
};