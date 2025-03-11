"use Client"
import { IoLogoWhatsapp } from 'react-icons/io5';
import styles from "./styles.module.css";

const OrderButton = ({text}:{text:string}) => {
  return (
    <div className="w-[100%] mt-3">
      <div>
          <a href="https://wa.me/+573164944460" className={`${styles.button}`}>
            <IoLogoWhatsapp className={`${styles.logo}`} />
            <span className="text-sm opacity-85">{text}</span>
          </a>
      </div>
    </div>
  );
};

export default OrderButton;