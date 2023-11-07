interface LogoProps {
    color?: string;
    size?: string;
}

let sizes = new Map<string, string>([
    ["small", " text-xl"],
    ["medium", "text-3xl"],
    ["large", "text-5xl"]
]);


export default function Logo({color = "text-gray-200", size = "medium"}: LogoProps) {
    return (
        <h2 className={` font-extrabold ${color} ${sizes.get(size)}`}>PicPayChallenge</h2>
    );
}
