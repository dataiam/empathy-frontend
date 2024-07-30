
import Image from 'next/image';

export const Buttons: React.FC<ButtonProps> = ({ id, title, type, classValue }) => {
  return (
    <button type={type} className={classValue} id={id}>{title}</button>
  )
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ id, title, type, btnClass, iconClass }) => {
  return (
    <button type={type} className={btnClass} id={id}><span aria-hidden="true" className={iconClass}></span>{title}</button>
  )
}

export const ButtonImage: React.FC<ButtonImageProps> = ({ id, title, type, btnClass, imgClass, url, alt, height, width }) => {
  return (
    <button type={type} className={btnClass} id={id}>
      <Image className={imgClass} src={url} width={width} height={height} alt={alt}/>
      {title}
    </button>
  )
}
