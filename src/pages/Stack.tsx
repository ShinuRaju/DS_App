import Heading from '../components/Heading';
import PreCodeBlock from '../components/PreCodeBlock';
import { TFileName, TTitle } from '../datas/datas';



const Stack = () => {
    let title: TTitle = 'Stack';
    let codeFileurl: TFileName = 'Stack';
    return (
        <>
            <Heading>{title}</Heading>
            <PreCodeBlock file={codeFileurl} />
        </>
    )
}

export default Stack