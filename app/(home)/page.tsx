import { APP_NAME } from "@/lib/constants";

export default async function Page() {
  return (
    <div>
      <h1 className='h1-bold text-center p-10'>歡迎來到 {APP_NAME}</h1>
    </div>
  )
}