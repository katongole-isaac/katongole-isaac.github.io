const ImageIcon: React.FC<
  { divClassName?: string } & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ divClassName, ...props }) => {
  return (
    <div className={`w-14 ${divClassName}`}>
      <img {...props} />
    </div>
  );
};

export default ImageIcon;
