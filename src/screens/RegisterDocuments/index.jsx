import { View } from "react-native";
import Input from "../../components/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import ButtonGeneric from "../../components/Button/Index";
import { styles } from "./style";
import { useState } from "react";


function RegisterDocuments(){

    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    const route = useRoute()

    const {nome, sobrenome} = route.params

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input title="Informe seu CPF" setValue={setCpf}/>
                <Input title="Informe seu RG" setValue={setRg}/>
            </View>
            <View style={styles.containerButtons}>
                <ButtonGeneric 
                    textButton="Voltar" 
                    backgroundColor='#860929' 
                    destinyScreen="registerName" /> 
                <ButtonGeneric 
                    textButton="Próxima" 
                    backgroundColor='#01633D' 
                    destinyScreen="result" 
                    params={{nome: nome, sobrenome: sobrenome, cpf: cpf, rg: rg}}/>
            </View> 
        </View>
    )
}

export default RegisterDocuments