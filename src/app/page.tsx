import SignupForm from "@/src/components/signup-form"
import { Analytics } from "@vercel/analytics/react"

export default function IndexPage() {
  return (
    <section className="container grid h-full items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex h-full max-w-[980px] flex-col items-center justify-center">
        <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Get awesome stuff to your inbox!
        </h1>
        <SignupForm />
        <Analytics />
      </div>
    </section>
  )
}
