type IconAndTextProps = {
    icon: string;
    text: string;
};

export default function IconAndText({ icon, text }: IconAndTextProps) {
    return <div className="flex flex-row items-center gap-2"><img className="h-4 w-4" src={icon} alt="icon" /><p className="text-sm text-[#F7F9FA]/60">{text}</p></div>;
}
