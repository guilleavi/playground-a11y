import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href={"./visibility"}>
              Visibility
            </Link>
          </li>
          <li>
            <Link href={"./keyboard-compatibility"}>
              Keyboard Compatibility
            </Link>
          </li>
        </ul>
      </nav>

    </main>
  )
}
