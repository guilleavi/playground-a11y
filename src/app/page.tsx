import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href={"./elements-visibility"}>
              Elements Visibility
            </Link>
          </li>
          <li>
            <Link href={"./keyboard-navigation"}>
              Keyboard Navigation
            </Link>
          </li>
        </ul>
      </nav>

    </main>
  )
}
