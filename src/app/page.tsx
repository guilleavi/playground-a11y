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
            <Link href={"./color-contrast"}>
              Color Contrast
            </Link>
          </li>
          <li>
            <Link href={"./keyboard-navigation"}>
              Keyboard Navigation
            </Link>
          </li>
          <li>
            <Link href={"./magnification"}>
              Magnification
            </Link>
          </li>
        </ul>
      </nav>

    </main>
  )
}
