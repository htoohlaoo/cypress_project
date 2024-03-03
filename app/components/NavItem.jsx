import Link from "next/link"

export default function NavItem({label,path,data_test}){
    return (
        <Link href={path} data-test={data_test}>
            {label}
        </Link>
    )
}