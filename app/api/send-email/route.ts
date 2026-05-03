import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this if using another provider
      auth: {
        user: 'radivcodingacademy@gmail.com',
        pass: 'nljpylpkdhocliay',
      },
    })

    // Format the email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-w-xl mx-auto p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Inquiry: Radv Coding Academy</h2>
        <div style="margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px;">
            ${message || '<em>No additional message provided.</em>'}
          </div>
        </div>
        <hr style="margin-top: 30px; border-top: 1px solid #e5e7eb;"/>
        <p style="color: #6b7280; font-size: 0.875rem;"><small>This is an automated message from your Radv Academy website contact form.</small></p>
      </div>
    `

    await transporter.sendMail({
      from: 'radivcodingacademy@gmail.com',
      to: 'radivcodingacademy@gmail.com', // Sending to the same address to receive notifications
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    })
    console.log('[v0] Email sent via Nodemailer')

    return NextResponse.json(
      {
        success: true,
        message: 'Email processed successfully!',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('[v0] Email API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    )
  }
}
