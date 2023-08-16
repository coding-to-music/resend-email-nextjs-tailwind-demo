import { NextResponse } from "next/server"
import { WelcomeEmail } from "@/src/emails/welcome"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}

// import * as React from "react"
// import { NextResponse } from "next/server"
// import { Resend } from "resend"

// import { EmailTemplate } from "../../../components/email-template"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
//     })

//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }
