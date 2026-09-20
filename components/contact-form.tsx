"use client"

import React from "react"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, User, Building } from "lucide-react"
import { submitContactForm } from "@/app/actions"
import type { z } from "zod"

// Infer the type from the schema for better type safety
type ContactFormState =
  | {
      success: boolean
      message: string
      errors?: z.inferFlattenedErrors<typeof import("../app/actions").contactFormSchema>["fieldErrors"]
    }
  | undefined

export function ContactForm() {
  // Replace useState for formData and isSubmitting with useActionState
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(submitContactForm, undefined)

  // Add a local state for form fields to control them
  const [localFormData, setLocalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  // Handle changes for controlled inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalFormData({ ...localFormData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setLocalFormData({ ...localFormData, inquiryType: value })
  }

  // Reset form after successful submission
  React.useEffect(() => {
    if (state?.success) {
      setLocalFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: "",
      })
    }
  }, [state])

  return (
    <Card className="bg-white shadow-none rounded-none border-chamber/20">
      <CardContent className="p-8">
        <h3 className="font-display text-2xl uppercase text-chamber mb-6">Write the spec</h3>
        {/* Add submission status message */}
        {state?.message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm ${state.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {state.message}
          </div>
        )}
        <form action={formAction} className="space-y-6">
          {" "}
          {/* Use formAction here */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Full Name *"
                name="name" // Add name attribute
                value={localFormData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
              {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name.join(", ")}</p>}
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email Address *"
                name="email" // Add name attribute
                value={localFormData.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
              {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email.join(", ")}</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phone" // Add name attribute
                value={localFormData.phone}
                onChange={handleChange}
                className="pl-10"
              />
              {state?.errors?.phone && <p className="text-red-500 text-xs mt-1">{state.errors.phone.join(", ")}</p>}
            </div>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Company Name"
                name="company" // Add name attribute
                value={localFormData.company}
                onChange={handleChange}
                className="pl-10"
              />
              {state?.errors?.company && <p className="text-red-500 text-xs mt-1">{state.errors.company.join(", ")}</p>}
            </div>
          </div>
          <Select
            name="inquiryType" // Add name attribute
            value={localFormData.inquiryType}
            onValueChange={handleSelectChange}
            required // Make inquiry type required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Inquiry Type *" /> {/* Update placeholder */}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bulk-order">Bulk Order Inquiry</SelectItem>
              <SelectItem value="export">Export Services</SelectItem>
              <SelectItem value="product-info">Product Information</SelectItem>
              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              <SelectItem value="quality">Quality & Certification</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {state?.errors?.inquiryType && (
            <p className="text-red-500 text-xs mt-1">{state.errors.inquiryType.join(", ")}</p>
          )}
          <Textarea
            placeholder="Your Message *"
            name="message" // Add name attribute
            value={localFormData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message.join(", ")}</p>}
          <Button type="submit" disabled={isPending} className="w-full rounded-none bg-chamber hover:bg-kernel hover:text-chamber text-icefield py-3 crate-stamp text-sm">
            {isPending ? "Sending..." : "Send to packhouse"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
