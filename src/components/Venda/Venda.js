import React, { useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import Menu from '../Header/Menu';
import Svg, { G, Circle, Path } from "react-native-svg"
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { formataData } from './Services'

export default function Vendas({ navigation }) {

    const [vendas, setVendas] = useState()

    useFocusEffect(
        React.useCallback(() => {
            fetch(`http://bdpapiserver-com.umbler.net/notas/limite/${10}/${0}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                console.log(result.notas[0])
                setVendas(result.notas[0])
            })
            return () => {
                setVendas([])
            };
        }, [])
    );

    return (
        <SafeAreaView>
            <Menu titulo="Venda" toggleDrawer={() => navigation.toggleDrawer()} />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: "85%", backgroundColor: 'rgba(0,121,255,0.075)', flexDirection: 'row', flexWrap: 'wrap', padding: 15, marginTop: 25, borderRadius: 5, alignItems: "center" }}>
                    <View style={{ width: "37%", flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#0079FF" }}>Data Inicial</Text>
                        <Text style={{ marginLeft: 8 }}>
                            <Svg
                                width={11}
                                height={7}
                                viewBox="0 0 11 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M10.246.29a1 1 0 00-1.41 0l-3.59 3.54L1.706.29a1 1 0 10-1.41 1.42l4.24 4.24a1 1 0 001.42 0l4.29-4.24a1 1 0 000-1.42z"
                                    fill="#0079FF"
                                />
                            </Svg>
                        </Text>
                    </View>
                    <View style={{ width: "26%", alignItems: "center" }}>
                        <Text style={{ backgroundColor: "#fff", padding: 7, borderRadius: 5 }}>
                            <Svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M15.3 1.8h-1.8V.9a.9.9 0 10-1.8 0v.9H6.3V.9a.9.9 0 10-1.8 0v.9H2.7A2.7 2.7 0 000 4.5v10.8A2.7 2.7 0 002.7 18h12.6a2.7 2.7 0 002.7-2.7V4.5a2.7 2.7 0 00-2.7-2.7zm.9 13.5a.9.9 0 01-.9.9H2.7a.9.9 0 01-.9-.9V9h14.4v6.3zm0-8.1H1.8V4.5a.9.9 0 01.9-.9h1.8v.9a.9.9 0 001.8 0v-.9h5.4v.9a.9.9 0 101.8 0v-.9h1.8a.9.9 0 01.9.9v2.7z"
                                    fill="#0079FF"
                                />
                            </Svg>
                        </Text>
                    </View>
                    <View style={{ width: "37%", flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#0079FF" }}>Data Final</Text>
                        <Text style={{ marginLeft: 8 }}>
                            <Svg
                                width={11}
                                height={7}
                                viewBox="0 0 11 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M10.246.29a1 1 0 00-1.41 0l-3.59 3.54L1.706.29a1 1 0 10-1.41 1.42l4.24 4.24a1 1 0 001.42 0l4.29-4.24a1 1 0 000-1.42z"
                                    fill="#0079FF"
                                />
                            </Svg>
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 20 }}>
                <View style={{ width: "85%", flexDirection: "column" }}>
                    <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ marginLeft: 7, marginTop: 15, marginBottom: 15, fontSize: 23, fontFamily: "Ubuntu-Bold", color: "#001E40" }}>Notas</Text>
                        </View>
                        <View style={{ width: "50%", flexWrap: "wrap", flexDirection: "row", justifyContent: "flex-end" }}>
                            <Text onPress={() => navigation.navigate("NomeClienteVenda")} style={{ marginLeft: 7, marginTop: 15, marginBottom: 15, fontSize: 16, fontFamily: "Ubuntu-Medium", color: "#fff", backgroundColor: "#FFA300", paddingTop: 7, paddingBottom: 7, paddingLeft: 10, paddingRight: 10, borderRadius: 5 }}>Nova</Text>
                        </View>
                    </View>

                    {vendas != undefined && (
                        vendas.map((item, index) => {
                            return (
                                <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8", borderStyle: "solid", paddingTop: 20, paddingBottom: 20, paddingLeft: 7, flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "70%" }}>
                                        <View style={{ width: "50%" }}>
                                            <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B" }}>
                                                {item.cliente && (
                                                    <Text>{item.cliente}</Text>
                                                )}
                                                {item.cliente === '' && (
                                                    <Text>Sem Nome</Text>
                                                )}
                                            </Text>
                                        </View>
                                        <View style={{ width: "50%" }}>
                                            <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B" }}>{formataData(item.data)}</Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "30%", justifyContent: "flex-end" }}>
                                        <Text style={{ marginRight: 7 }}>
                                            <Svg
                                                width={21}
                                                height={16}
                                                viewBox="0 0 21 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <Path
                                                    d="M19.924 7.6c-2.02-4.69-5.82-7.6-9.92-7.6s-7.9 2.91-9.92 7.6a1 1 0 000 .8c2.02 4.69 5.82 7.6 9.92 7.6s7.9-2.91 9.92-7.6a1.001 1.001 0 000-.8zm-9.92 6.4c-3.17 0-6.17-2.29-7.9-6 1.73-3.71 4.73-6 7.9-6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"
                                                    fill="#0079FF"
                                                />
                                            </Svg>
                                        </Text>
                                    </View>
                                </View>
                            )
                        })

                    )}

                </View>
            </View>
        </SafeAreaView>
    )
}