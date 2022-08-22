import { SafeAreaView } from "react-native-safe-area-context"

export const Screen=({children,...props})=>{
    return (
<SafeAreaView {...props}>
    {children}
</SafeAreaView>
    )
}