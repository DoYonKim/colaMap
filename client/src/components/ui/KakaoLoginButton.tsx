import React from 'react';
import { View, Image, Button, ImageBackground, TouchableOpacity, Text, Linking} from 'react-native';
// import config from '../../config/index'

const uri = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=";//+ config.kakao.appKey + "&redirect_uri=http://localhost:3003/api/auth/get-kakao-token";

const image:string = "../../assets/img/kakao_login_large_wide.png";

const KakaoLogin: React.FC = () => {
    return (

        <TouchableOpacity onPress={() => Linking.openURL(uri)}> 
            <Image source={require(image)}/>
        </TouchableOpacity>
    );
} 

export default KakaoLogin;
