import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby3GynJrSH5Z7_DgmX8H0jfHWf496L3tiNFG0jw49nJYR3mvlGr9DJu2jXcE581JF1jNw/exec";

const SOCIALS = [
  { icon: "MessageCircle" as const, label: "ВКонтакте", href: "https://vk.ru/denulaser_rzn" },
  { icon: "Send" as const, label: "Telegram", href: "https://t.me/denulazerrzn" },
  { icon: "Instagram" as const, label: "Instagram", href: "https://www.instagram.com/laser.rzn" },
];

interface BookingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source: string;
  destinationUrl: string;
  destinationLabel?: string;
}

export default function BookingFormDialog({
  open,
  onOpenChange,
  source,
  destinationUrl,
  destinationLabel = "Перейти к записи",
}: BookingFormDialogProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setComment("");
    setSubmitted(false);
  };

  const handleClose = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ name, phone, comment, source }),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-denu-dark">Оставить заявку</DialogTitle>
              <DialogDescription>Заполните форму, и мы свяжемся с вами для записи</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Как к вам обращаться" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Необязательно" />
              </div>
              <Button type="submit" disabled={loading} className="gradient-pink text-white hover:opacity-90 mt-1">
                {loading ? "Отправляем..." : "Отправить заявку"}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-2">
            <p className="text-4xl mb-3">🩷</p>
            <h3 className="font-display text-2xl font-semibold text-denu-dark mb-2">Спасибо!</h3>
            <p className="text-denu-dark/60 mb-6">Ваша заявка принята, мы скоро свяжемся с вами</p>
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white gradient-pink hover:opacity-90 transition-opacity shadow-md w-full mb-6"
            >
              {destinationLabel} <Icon name="ArrowRight" size={16} />
            </a>
            <p className="text-sm text-denu-dark/50 mb-3">Подпишись на нас в соцсетях</p>
            <div className="flex items-center justify-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-denu-pink-light hover:bg-denu-pink-soft flex items-center justify-center text-denu-pink transition-colors"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}