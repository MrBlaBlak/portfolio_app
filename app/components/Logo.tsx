import Image from 'next/image';
import logo from '@/public/images/logoTransparent.png';
type Props = {

};
const Logo = ({}: Props) => {
    return (
        <Image className={`max-h-24 max-w-24 `} src={logo} alt="logo"/>
    );
};
export default Logo;