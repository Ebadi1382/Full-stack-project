import Image from "next/image";
import Link from "next/link";

const index = () => {
    return (
        <div>
            <div className="flex justify-around items-center">
                <Link href={"/"} target="_blank">
                <Image className="rounded-2xl" alt="banner Image" width={680} height={300} src="/images/banner/1.jpg" />
                </Link>
                <Link href={"/"} target="_blank">
                <Image className="rounded-2xl" alt="banner Image" width={680} height={300} src="/images/banner/2.jpg" />
                </Link>
            </div>
        </div>
    );
}

export default index;