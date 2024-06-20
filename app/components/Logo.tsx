import Image from 'next/image';
import logo from '@/public/images/logoTransparent.png';
type Props = {

};
const Logo = ({}: Props) => {
    return (
        <Image className={`max-h-[75px] max-w-[75px] `} src={logo} alt="logo"/>
    );
};
export default Logo;