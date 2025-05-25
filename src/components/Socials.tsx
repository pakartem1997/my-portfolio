import { FaTelegram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import { ImVk } from "react-icons/im";

 const iconSize = 20;

const socialLinks = [
  {
    text: "+7 (999) 466-45-36",
    icon: <BsFillTelephoneFill size={iconSize} color="#000" />,
    url: `tel:+79994664536`,
    alt: "Телефон",
  },
  {
    text: "happy.pak@mail.ru",
    icon: <GrMailOption size={iconSize} />,
    url: `mailto:happy.pak@mail.ru`,
    alt: "Email",
  },
  {
    text: "@pakartem",
    icon: <FaTelegram size={iconSize} />,
    url: "#",
    alt: "Telegram",
  },
  {
    text: "https://vk.com/kot7654",
    icon: <ImVk size={iconSize} />,
    url: "https://vk.com/kot7654",
    alt: "VK",
  },
];

export const Socials = () => {

  return (
    <>
      <span className="fw-bold">Контакты:</span>
      <br />
      {socialLinks.map(({ text, icon, url }) => (
        <div key={text}>
          <a className="icon-link text-decoration-none" href={url}>
            {icon}
            <span>{text}</span>
          </a>
        </div>
      ))}
    </>
  );
};
