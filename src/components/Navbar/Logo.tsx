import Image from "next/image"

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <Image
        src="https://uploads-ssl.webflow.com/5fd8d06e66d63be926161803/5fda1a93a4cabe90c808943b_logo_lovyca_white.svg"
        className=" h-8 mr-3"
        alt="Logo"
        width={200}
        height={150}
      />
    </a>
  )
}
