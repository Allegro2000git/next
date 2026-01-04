import {getLayout} from "@/components/Layout/BaseLayout/BaseLayout";
import {LoginNavigate} from "@/hoc/LoginNavigate";


function Private() {
    return (
        <LoginNavigate>
            <h2>Private Page</h2>
        </LoginNavigate>
    )
}

Private.getLayout = getLayout
export default Private