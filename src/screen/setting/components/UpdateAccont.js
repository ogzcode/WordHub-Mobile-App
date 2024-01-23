import React from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'

import { updateUserData } from '../../../services/auth';
import { useToast } from "../../../components/toast/useToast"
import CustomInput from "../../../components/CustomInput";
import { logout } from '../../../services/auth';
import CustomAlert from '../../../components/CustomAlert';

import { size } from '../../../style/size';
import { typography } from '../../../style/typography';
import { color } from '../../../style/color';
import { border } from '../../../style/border';

const style = StyleSheet.create({
    accountBox: {
        backgroundColor: "white",
        padding: size["4"],
        borderRadius: size["2"],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][200],
    },
    accountHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: size["4"]
    },
    accountHeaderText: {
        fontSize: typography["fontSizes"]["2xl"],
        fontFamily: "Comfortaa-Bold",
        color: color["textDark"][700]
    },
    updatePasswordHeader: {
        fontSize: typography["fontSizes"]["lg"],
        fontFamily: "Comfortaa-Bold",
        marginBottom: size["2"],
        marginTop: size["2"],
        color: color["textDark"][700]
    },
    updateBtn: {
        backgroundColor: color["indigo"][500],
        padding: size["2"],
        borderRadius: border["rounded"]["md"],
        marginTop: size["2"],
    },
    updateBtnText: {
        fontSize: typography["fontSizes"]["lg"],
        fontFamily: "Comfortaa-Bold",
        color: color["white"],
        textAlign: "center"
    },
    logoutBtn: {
        backgroundColor: color["red"][100],
        paddingHorizontal: size["3"],
        paddingVertical: size["1"],
        borderRadius: border["rounded"]["md"],
    },
    logoutBtnText: {
        fontSize: typography["fontSizes"]["lg"],
        fontFamily: "Comfortaa-Bold",
        color: color["red"][500],
        textAlign: "center"
    },
})

export default function UpdateAccont() {
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const toast = useToast();

    const handleUpdatePassword = async () => {
        if ((password !== confirmPassword) || (password === "" || confirmPassword === "")) {
            toast.showToast("Password and Confirm Password must be the same", "error");
            return
        }

        const res = await updateUserData({ password: password });
        console.log(res);
        if (!res.error) {
            toast.showToast("Update Password Success", "success");
        }
        else {
            toast.showToast("Update Password Failed", "error");
        }
    }

    return (
        <View style={style.accountBox}>
            <View style={style.accountHeader}>
                <Text style={style.accountHeaderText}>Accout</Text>
                <Pressable style={style.logoutBtn} onPress={() => setVisible(true)}>
                    <Text style={style.logoutBtnText}>Logout</Text>
                </Pressable>
            </View>

            <Text style={style.updatePasswordHeader}>
                Update Password
            </Text>
            <CustomInput value={password} onChangeText={setPassword} placeholder="Password" label={"Password"} />
            <CustomInput value={confirmPassword} onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                label={"Confirm Password"}
            />
            <Pressable onPress={handleUpdatePassword} style={style.updateBtn}>
                <Text style={style.updateBtnText}>Update Password</Text>
            </Pressable>
            <CustomAlert
                visible={visible}
                title="Logout"
                content="Are you sure want to logout?"
                onClose={() => setVisible(false)}
                onSubmit={logout}
            />
        </View>
    )
}