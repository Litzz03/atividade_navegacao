import { View } from "react-native";
import Input from "../../components/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import ButtonGeneric from "../../components/Button/Index";
import { styles } from "./styles";
import { useState } from "react";

function RegisterName(){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input title="Informe seu nome" setValue={setNome}/>
                <Input title="Informe seu sobrenome" setValue={setSobrenome}/>
            </View>
            <ButtonGeneric 
                textButton="Próxima" 
                backgroundColor='#01633D' 
                destinyScreen="registerDocuments" 
                params={{nome: nome, sobrenome: sobrenome}}/> 
        </View>
    )
}

export default RegisterName