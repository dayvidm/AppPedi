// import { useRouter } from 'next/navigation';
import { isAuthenticated } from "./utils/auth"

const usIserAuthenticated = isAuthenticated();
export default function Home() {
  // const router = useRouter();

  return (
    <main >
      teste aqui
    </main>
  )
}
