import { useMediaQuery } from "react-responsive";

const MediaQueryHint = () => {
  const isXs = useMediaQuery({ maxWidth: 480 });
  const isSm = useMediaQuery({ maxWidth: 640 });
  const isMd = useMediaQuery({ maxWidth: 768 });
  const isLg = useMediaQuery({ maxWidth: 1024 });
  const isXl = useMediaQuery({ maxWidth: 1280 });
  return (
    <div className="absolute z-50 text-xs top-0">
      {isXs
        ? "XS"
        : isSm
        ? "SM"
        : isMd
        ? "MD"
        : isLg
        ? "LG"
        : isXl
        ? "XL"
        : "Unknown"}
    </div>
  );
};

export default MediaQueryHint;
