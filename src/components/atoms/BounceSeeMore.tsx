import { VscFoldDown } from "react-icons/vsc";

type Props = {
  isLeft?: boolean;
  text: string;
  targetId: string;
  marginLeft?: number;
};

export default function BounceSeeMore({
  isLeft = false,
  text,
  targetId,
  marginLeft,
}: Props) {
  return (
    <a
      href={"#" + targetId}
      className={`absolute bottom-6 ${
        isLeft ? "left-0 md:left-20" : "right-0 md:right-20"
      } animate-bounce text-gray-600 hover:text-gray-400 cursor-pointer`}
    >
      <span
        className="inline-block -rotate-90 pointer-events-none"
        style={{
          marginBottom: text.length * 3.5 + "px",
          marginLeft: (marginLeft || text.length * -3.25) + "px",
        }}
      >
        {text}
      </span>
      <VscFoldDown size={20}></VscFoldDown>
    </a>
  );
}
