"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado para área de transferência")
  }

  return (
    <div key={phone} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="tetx-sm">{phone}</p>
      </div>
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
